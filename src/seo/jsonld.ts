import { getLocalizedPath } from '../i18n/routes'
import type { PortfolioContent } from '../data/portfolio'
import type { Project } from '../types'
import {
  PERSON_ID,
  PROFILE_IMAGE_URL,
  SAME_AS,
  SITE_LAUNCH_DATE,
  SITE_NAME,
  SITE_ORIGIN,
  WEBSITE_ID,
  absoluteUrl,
  assetUrl,
} from './site'
import { cleanProjectTitle } from './text'
import type { SeoPage } from './types'

type Education = PortfolioContent['education']
type Profile = PortfolioContent['profile']

const KNOWS_ABOUT = [
  'AI Engineering',
  'Applied Artificial Intelligence',
  'Harness Engineering',
  'Large Language Models (LLMs)',
  'Retrieval-Augmented Generation (RAG)',
  'AI Agents',
  'Model Context Protocol (MCP)',
  'Python',
  'FastAPI',
  'TypeScript',
  'React',
  'PostgreSQL',
]

function personNode(profile: Profile, education: Education, localeHome: string) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    url: localeHome,
    image: PROFILE_IMAGE_URL,
    jobTitle: profile.role,
    description: profile.tagline,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Junta Já Brasil',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: education.institution },
      { '@type': 'EducationalOrganization', name: education.postgrad.institution },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: education.degree,
        credentialCategory: 'degree',
        recognizedBy: { '@type': 'CollegeOrUniversity', name: education.institution },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: education.postgrad.degree,
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'EducationalOrganization', name: education.postgrad.institution },
      },
    ],
    knowsLanguage: ['pt-BR', 'en'],
    knowsAbout: KNOWS_ABOUT,
    sameAs: [...SAME_AS],
  }
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_ORIGIN,
    name: `${SITE_NAME} — AI Engineer & Software Engineer`,
    inLanguage: ['pt-BR', 'en'],
    publisher: { '@id': PERSON_ID },
  }
}

function programmingLanguages(project: Project) {
  const source = (project.techFull?.length ? project.techFull : project.tags).filter(Boolean)
  const langLike =
    /^(javascript|typescript|python|node\.?js|react|next\.js|java|go|rust|php|html|css|sql|dart|flutter|express|fastapi|vite|c\+\+|c#|ruby|kotlin|swift|bash|shell|sqlalchemy|postgresql|mongodb)/i
  const filtered = source.filter((item) => langLike.test(item.replace(/\s+\d.*$/, '').trim()))
  return [...new Set(filtered.length ? filtered : project.tags)]
}

export function buildPageJsonLd(
  page: Omit<SeoPage, 'jsonLd' | 'bodyHtml'>,
  ctx: {
    profile: Profile
    education: Education
    projects: Project[]
    project?: Project
  },
) {
  const localeHome = absoluteUrl(getLocalizedPath('/', page.locale))
  const person = personNode(ctx.profile, ctx.education, localeHome)
  const website = websiteNode()
  const graph: Record<string, unknown>[] = [person, website]

  if (page.kind === 'home') {
    graph.push({
      '@type': 'ProfilePage',
      '@id': `${page.canonical}#page`,
      url: page.canonical,
      name: page.title,
      description: page.description,
      dateCreated: SITE_LAUNCH_DATE,
      dateModified: page.buildDate,
      inLanguage: page.locale,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    })
  }

  if (page.kind === 'projects') {
    graph.push(
      {
        '@type': 'CollectionPage',
        '@id': `${page.canonical}#page`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: page.locale,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': `${page.canonical}#itemlist` },
      },
      {
        '@type': 'ItemList',
        '@id': `${page.canonical}#itemlist`,
        name: page.title,
        numberOfItems: ctx.projects.length,
        itemListElement: ctx.projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(getLocalizedPath(`/projetos/${project.id}`, page.locale)),
          name: cleanProjectTitle(project.title),
        })),
      },
    )
  }

  if (page.kind === 'project' && ctx.project) {
    const project = ctx.project
    const languages = programmingLanguages(project)
    const listingUrl = absoluteUrl(getLocalizedPath('/projetos', page.locale))
    const software: Record<string, unknown> = {
      '@type': 'SoftwareApplication',
      '@id': `${page.canonical}#software`,
      name: cleanProjectTitle(project.title),
      description: page.description,
      url: page.canonical,
      image: assetUrl(typeof project.image === 'string' ? project.image : undefined),
      author: { '@id': PERSON_ID },
      creator: { '@id': PERSON_ID },
      applicationCategory: 'WebApplication',
      inLanguage: page.locale,
      isPartOf: { '@id': WEBSITE_ID },
    }
    if (project.year) software.datePublished = project.year
    software.dateModified = page.buildDate
    if (project.repo) software.codeRepository = project.repo
    if (project.link) software.installUrl = project.link
    if (languages.length) software.programmingLanguage = languages

    graph.push(software, {
      '@type': 'BreadcrumbList',
      '@id': `${page.canonical}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: SITE_NAME,
          item: localeHome,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.locale === 'en' ? 'Projects' : 'Projetos',
          item: listingUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cleanProjectTitle(project.title),
          item: page.canonical,
        },
      ],
    })
  }

  if (page.kind === 'links') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${page.canonical}#page`,
      url: page.canonical,
      name: page.title,
      description: page.description,
      inLanguage: page.locale,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
