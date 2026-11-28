import { getPortfolioContent } from '../data/portfolio'
import { getLocalizedPath, getRouteInfo, type Locale } from '../i18n/routes'
import type { Project } from '../types'
import { buildPageJsonLd } from './jsonld'
import { absoluteUrl, assetUrl, getBuildDate, PROFILE_IMAGE_URL, SITE_NAME } from './site'
import { renderCrawlerBody } from './static-html'
import { fitDescription, fitTitle } from './text'
import type { SeoPage } from './types'

function hreflangFor(internalPath: string) {
  const pt = getLocalizedPath(internalPath, 'pt-BR')
  const en = getLocalizedPath(internalPath, 'en')
  return [
    { lang: 'pt-BR', href: absoluteUrl(pt) },
    { lang: 'en', href: absoluteUrl(en) },
    { lang: 'x-default', href: absoluteUrl(pt) },
  ]
}

function imageAlt(project: Project, locale: Locale) {
  const title = project.title.replace(/^Em breve:\s*/i, '').trim()
  return locale === 'en'
    ? `Screenshot of ${title} by ${SITE_NAME}`
    : `Captura de ${title}, projeto de ${SITE_NAME}`
}

function projectSeoCopy(project: Project, locale: Locale) {
  const country = locale === 'en' ? 'Brazil' : 'Brasil'
  const title = fitTitle(project.title, [
    `${SITE_NAME}, São Paulo`,
    `${SITE_NAME}, São Paulo, ${country}`,
    project.year ? `${SITE_NAME}, São Paulo, ${country}, ${project.year}` : '',
  ].filter(Boolean))
  const extras = [
    project.subtitle,
    project.year ? (locale === 'en' ? `Shipped in ${project.year}.` : `Entregue em ${project.year}.`) : '',
    project.tags.slice(0, 4).join(', '),
    `${SITE_NAME}, ${locale === 'en' ? 'São Paulo, Brazil' : 'São Paulo, Brasil'}.`,
  ].filter(Boolean) as string[]
  const description = fitDescription(project.subtitle || project.description || project.opening || '', extras)
  return { title, description }
}

function finish(
  page: Omit<SeoPage, 'jsonLd' | 'bodyHtml'>,
  locale: Locale,
  project?: Project,
): SeoPage {
  const content = getPortfolioContent(locale)
  const jsonLd = buildPageJsonLd(page, {
    profile: content.profile,
    education: content.education,
    projects: content.projects,
    project,
  })
  const withJson: SeoPage = { ...page, jsonLd, bodyHtml: '' }
  withJson.bodyHtml = renderCrawlerBody(withJson, {
    profile: content.profile,
    projects: content.projects,
    experiences: content.experiences,
    ui: content.ui,
    project,
  })
  return withJson
}

export function listPublicInternalPaths() {
  return ['/', '/projetos', '/links-contatos', ...getPortfolioContent('pt-BR').projects.map((project) => `/projetos/${project.id}`)]
}

export function resolveSeoPage(pathname: string, buildDate = getBuildDate()): SeoPage {
  const { locale, internalPath } = getRouteInfo(pathname)
  const content = getPortfolioContent(locale)
  const { profile, projects, ui } = content
  const country = locale === 'en' ? 'Brazil' : 'Brasil'
  const robots = 'index, follow, max-image-preview:large'

  if (internalPath === '/links-contatos') {
    const path = getLocalizedPath('/links-contatos', locale)
    return finish(
      {
        kind: 'links',
        locale,
        path,
        title:
          locale === 'en'
            ? fitTitle('Professional links and contact', [`${SITE_NAME}, SP`])
            : fitTitle('Links e contato profissional', [`${SITE_NAME}, SP`]),
        description: fitDescription(`${profile.name} — ${profile.role}. ${profile.tagline}`, [
          profile.location,
          locale === 'en' ? 'GitHub, LinkedIn, resume, and WhatsApp.' : 'GitHub, LinkedIn, currículo e WhatsApp.',
        ]),
        canonical: absoluteUrl(path),
        hreflang: hreflangFor('/links-contatos'),
        ogType: 'website',
        ogImage: PROFILE_IMAGE_URL,
        ogImageAlt: ui.metadata.imageAlt,
        ogLocale: locale === 'en' ? 'en_US' : 'pt_BR',
        ogLocaleAlternate: locale === 'en' ? 'pt_BR' : 'en_US',
        robots,
        buildDate,
      },
      locale,
    )
  }

  if (internalPath === '/projetos') {
    const path = getLocalizedPath('/projetos', locale)
    const heading = `${ui.projects.titleStart}${ui.projects.titleAccent}${ui.projects.titleEnd}`
    return finish(
      {
        kind: 'projects',
        locale,
        path,
        title:
          locale === 'en'
            ? fitTitle('AI and software project portfolio', [SITE_NAME])
            : fitTitle('Projetos de IA e software em produção', [SITE_NAME]),
        description: fitDescription(ui.projects.description, [heading, `${profile.name}, ${profile.role}, ${profile.location}.`]),
        canonical: absoluteUrl(path),
        hreflang: hreflangFor('/projetos'),
        ogType: 'website',
        ogImage: PROFILE_IMAGE_URL,
        ogImageAlt: ui.metadata.imageAlt,
        ogLocale: locale === 'en' ? 'en_US' : 'pt_BR',
        ogLocaleAlternate: locale === 'en' ? 'pt_BR' : 'en_US',
        robots,
        buildDate,
      },
      locale,
    )
  }

  const projectId = internalPath.match(/^\/projetos\/([^/]+)$/)?.[1]
  if (projectId) {
    const project = projects.find((item) => item.id === decodeURIComponent(projectId))
    const path = getLocalizedPath(internalPath, locale)
    if (!project) {
      return finish(
        {
          kind: 'project',
          locale,
          path,
          title: fitTitle(ui.projects.notFoundTitle, [SITE_NAME, `${SITE_NAME}, São Paulo, ${country}`]),
          description: fitDescription(ui.projects.notFoundTitle, [profile.tagline, profile.location]),
          canonical: absoluteUrl(path),
          hreflang: hreflangFor(internalPath),
          ogType: 'website',
          ogImage: PROFILE_IMAGE_URL,
          ogImageAlt: ui.metadata.imageAlt,
          ogLocale: locale === 'en' ? 'en_US' : 'pt_BR',
          ogLocaleAlternate: locale === 'en' ? 'pt_BR' : 'en_US',
          robots: 'noindex, follow',
          buildDate,
        },
        locale,
      )
    }
    const copy = projectSeoCopy(project, locale)
    return finish(
      {
        kind: 'project',
        locale,
        path,
        title: copy.title,
        description: copy.description,
        canonical: absoluteUrl(path),
        hreflang: hreflangFor(`/projetos/${project.id}`),
        ogType: 'website',
        ogImage: assetUrl(typeof project.image === 'string' ? project.image : undefined),
        ogImageAlt: imageAlt(project, locale),
        ogLocale: locale === 'en' ? 'en_US' : 'pt_BR',
        ogLocaleAlternate: locale === 'en' ? 'pt_BR' : 'en_US',
        robots,
        buildDate,
      },
      locale,
      project,
    )
  }

  const path = getLocalizedPath('/', locale)
  return finish(
    {
      kind: 'home',
      locale,
      path,
      title:
        locale === 'en'
          ? fitTitle('Mateus Bonette | AI Engineer and Software Engineer')
          : fitTitle('Mateus Bonette | AI Engineer e Software Engineer, SP'),
      description: fitDescription(ui.metadata.description, [profile.tagline, profile.location, profile.bio]),
      canonical: absoluteUrl(path),
      hreflang: hreflangFor('/'),
      ogType: 'profile',
      ogImage: PROFILE_IMAGE_URL,
      ogImageAlt: ui.metadata.imageAlt,
      ogLocale: locale === 'en' ? 'en_US' : 'pt_BR',
      ogLocaleAlternate: locale === 'en' ? 'pt_BR' : 'en_US',
      robots,
      buildDate,
    },
    locale,
  )
}
