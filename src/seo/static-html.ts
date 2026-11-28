import { getLocalizedPath } from '../i18n/routes'
import type { PortfolioContent } from '../data/portfolio'
import type { Project } from '../types'
import { SAME_AS } from './site'
import { cleanProjectTitle, escapeHtml } from './text'
import type { SeoPage } from './types'

type Profile = PortfolioContent['profile']
type Ui = PortfolioContent['ui']
type Experience = PortfolioContent['experiences'][number]

const CRAWLER_STYLE =
  'max-width:72rem;margin:0 auto;padding:2rem 1.25rem;font-family:Manrope,system-ui,sans-serif;line-height:1.6;'

function p(text: string) {
  return `<p>${escapeHtml(text)}</p>`
}

function heading(level: 1 | 2 | 3, text: string) {
  return `<h${level}>${escapeHtml(text)}</h${level}>`
}

function linkList(items: Array<{ href: string; label: string }>) {
  return `<ul>${items
    .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`)
    .join('')}</ul>`
}

function projectLead(project: Project) {
  return project.opening || project.descriptionFull || project.subtitle || project.description
}

function renderProjectArticle(page: SeoPage, project: Project, ui: Ui, listingHref: string) {
  const title = cleanProjectTitle(project.title)
  const parts: string[] = [
    `<nav><a href="${escapeHtml(listingHref)}">${escapeHtml(ui.projects.backToProjects)}</a></nav>`,
    heading(1, title),
  ]
  if (project.year) parts.push(p(`${ui.projects.projectEyebrow} · ${project.year}`))
  if (project.subtitle) parts.push(p(project.subtitle))

  const lead = projectLead(project)
  if (lead && lead !== project.subtitle) {
    parts.push(heading(2, project.aboutTitle || ui.projects.aboutProject))
    for (const para of lead.split(/\n\n+/)) {
      if (para.trim()) parts.push(p(para.trim()))
    }
  }

  if (project.howItWorks?.length) {
    parts.push(heading(2, project.howItWorksTitle || ui.common.process))
    parts.push(
      `<ol>${project.howItWorks.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol>`,
    )
  }

  if (project.rules?.length) {
    parts.push(heading(2, project.rulesTitle || ui.projects.technicalHighlights))
    parts.push(
      `<table><thead><tr><th>${escapeHtml(ui.projects.ruleCriterion)}</th><th>${escapeHtml(ui.projects.ruleImplemented)}</th></tr></thead><tbody>${project.rules
        .map(
          (rule) =>
            `<tr><td>${escapeHtml(rule.criterion)}</td><td>${escapeHtml(rule.rule)}</td></tr>`,
        )
        .join('')}</tbody></table>`,
    )
  }

  if (project.highlights?.length) {
    parts.push(heading(2, project.highlightsTitle || ui.projects.technicalHighlights))
    parts.push(`<ul>${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`)
  }

  if (project.techFull?.length || project.tags.length) {
    parts.push(heading(2, ui.projects.technologiesUsed))
    parts.push(
      `<ul>${(project.techFull?.length ? project.techFull : project.tags)
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul>`,
    )
  }

  if (project.recruiterText) {
    parts.push(heading(2, ui.projects.forRecruiters))
    parts.push(p(project.recruiterText))
  }

  if (project.faq?.length) {
    parts.push(heading(2, project.faqTitle || (page.locale === 'en' ? 'Questions' : 'Perguntas')))
    for (const item of project.faq) {
      parts.push(heading(3, item.question))
      parts.push(p(item.answer))
    }
  }

  const outbound: Array<{ href: string; label: string }> = []
  if (project.repo) outbound.push({ href: project.repo, label: ui.projects.repository })
  if (project.link) outbound.push({ href: project.link, label: ui.projects.viewProject })
  if (outbound.length) parts.push(linkList(outbound))

  return parts.join('\n')
}

export function renderCrawlerBody(
  page: SeoPage,
  ctx: {
    profile: Profile
    projects: Project[]
    experiences: Experience[]
    ui: Ui
    project?: Project
  },
) {
  const { profile, projects, experiences, ui, project } = ctx
  const homeHref = getLocalizedPath('/', page.locale)
  const listingHref = getLocalizedPath('/projetos', page.locale)
  const linksHref = getLocalizedPath('/links-contatos', page.locale)
  const contact = [
    { href: `mailto:${profile.email}`, label: profile.email },
    { href: SAME_AS[0], label: 'LinkedIn' },
    { href: SAME_AS[1], label: 'GitHub' },
  ]

  if (page.kind === 'project' && project) {
    return `<main style="${CRAWLER_STYLE}">${renderProjectArticle(page, project, ui, listingHref)}</main>`
  }

  if (page.kind === 'projects') {
    const headingText = `${ui.projects.titleStart}${ui.projects.titleAccent}${ui.projects.titleEnd}`
    return `<main style="${CRAWLER_STYLE}">
${heading(1, headingText)}
${p(ui.projects.description)}
${heading(2, ui.projects.allProjects)}
<ol>${projects
      .map((item) => {
        const href = getLocalizedPath(`/projetos/${item.id}`, page.locale)
        return `<li><h3><a href="${escapeHtml(href)}">${escapeHtml(cleanProjectTitle(item.title))}</a></h3>${p(item.description)}</li>`
      })
      .join('')}</ol>
</main>`
  }

  if (page.kind === 'links') {
    return `<main style="${CRAWLER_STYLE}">
${heading(1, profile.name)}
${p(profile.role)}
${p(profile.tagline)}
${heading(2, page.locale === 'en' ? 'Links and contact' : 'Links e contato')}
${linkList([
  { href: homeHref, label: page.locale === 'en' ? 'Portfolio' : 'Portfólio' },
  { href: listingHref, label: page.locale === 'en' ? 'Projects' : 'Projetos' },
  ...contact,
])}
</main>`
  }

  return `<main style="${CRAWLER_STYLE}">
<header>
${heading(1, `${profile.name} — ${profile.role}`)}
${p(`${profile.tagline} ${profile.location}.`)}
</header>
<section>
${heading(2, page.locale === 'en' ? 'Professional summary' : 'Resumo profissional')}
${p(profile.bio)}
</section>
<section>
${heading(2, page.locale === 'en' ? 'Selected projects' : 'Projetos em destaque')}
<ol>${projects
    .slice(0, 8)
    .map((item) => {
      const href = getLocalizedPath(`/projetos/${item.id}`, page.locale)
      return `<li><h3><a href="${escapeHtml(href)}">${escapeHtml(cleanProjectTitle(item.title))}</a></h3>${p(item.description)}</li>`
    })
    .join('')}</ol>
<p><a href="${escapeHtml(listingHref)}">${escapeHtml(ui.projects.viewAll)}</a></p>
</section>
<section>
${heading(2, page.locale === 'en' ? 'Experience and education' : 'Experiência profissional e formação')}
<ul>${experiences
    .map((item) => `<li><strong>${escapeHtml(item.company)}</strong> — ${escapeHtml(item.role)}, ${escapeHtml(item.period)}.</li>`)
    .join('')}</ul>
</section>
<footer>
${p(page.locale === 'en' ? 'Contact' : 'Contato')}
${linkList([...contact, { href: linksHref, label: page.locale === 'en' ? 'Links' : 'Links e contato' }])}
</footer>
</main>`
}
