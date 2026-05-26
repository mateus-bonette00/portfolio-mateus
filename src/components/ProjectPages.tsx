import { type CSSProperties, type MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PROJECTS, UI } from '../data/portfolio'
import type { Project } from '../types'
import { ProjectDeviceShowcase, getDeviceType, getArchiveTitleFontStyle } from './Projects'
import { ProjectGallery } from './ProjectGallery'
import { getLocalizedHref } from '../i18n/routes'

const PROJECT_VISUALS = [
  { accent: '#60A5FA', wash: 'rgba(96,165,250,0.22)', ghost: 'rgba(34,211,238,0.08)' },
  { accent: '#22D3EE', wash: 'rgba(34,211,238,0.2)',  ghost: 'rgba(59,130,246,0.1)'  },
  { accent: '#93C5FD', wash: 'rgba(147,197,253,0.2)', ghost: 'rgba(251,191,36,0.08)' },
  { accent: '#FBBF24', wash: 'rgba(251,191,36,0.16)', ghost: 'rgba(96,165,250,0.1)'  },
  { accent: '#F472B6', wash: 'rgba(244,114,182,0.18)',ghost: 'rgba(96,165,250,0.08)' },
  { accent: '#34D399', wash: 'rgba(52,211,153,0.18)', ghost: 'rgba(59,130,246,0.08)' },
]

export function ProjectDetailPage({ projectId }: { projectId: string }) {
  const project = PROJECTS.find((item) => item.id === projectId)

  if (!project) {
    return (
      <main className="relative z-10 min-h-[70svh] pt-36">
        <div className="container-1200">
          <a href={getLocalizedHref('/#projects')} className="btn-ghost">
            <ArrowLeft size={16} />
            {UI.projects.backToProjects}
          </a>
          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
              {UI.projects.notFoundEyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {UI.projects.notFoundTitle}
            </h1>
          </div>
        </div>
      </main>
    )
  }

  const title = project.title.replace(/^Em breve:\s*/i, '')
  const hasRichContent = !!(project.descriptionFull || project.highlights?.length || project.techFull?.length || project.recruiterText)

  return (
    <main className="relative z-10 min-h-[70svh] pt-36">
      <section className="section">
        <div className="container-1200">
          <a href={getLocalizedHref('/#projects')} className="btn-ghost">
            <ArrowLeft size={16} />
            {UI.projects.backToProjects}
          </a>

          <div className="mt-10">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
              {UI.projects.projectEyebrow} · {project.year ?? ''}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gradient-static sm:text-6xl">
              {title}
            </h1>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-8">
              <ProjectGallery images={project.gallery} title={title} />
            </div>
          )}

          <div className="mt-10">
            <p className="max-w-3xl text-lg leading-relaxed text-ink-dim">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {hasRichContent ? (
            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">

              <div className="flex flex-col gap-8">
                {project.descriptionFull && (
                  <article className="liquid-card rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                      {UI.projects.aboutProject}
                    </p>
                    <div className="mt-4 flex flex-col gap-4">
                      {project.descriptionFull.split('\n\n').map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed text-ink-dim sm:text-base">
                          {para}
                        </p>
                      ))}
                    </div>
                  </article>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <article className="liquid-card rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                      {UI.projects.technicalHighlights}
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim sm:text-base">
                          <span className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                )}
              </div>

              <div className="flex flex-col gap-8">
                {project.techFull && project.techFull.length > 0 && (
                  <article className="liquid-card rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                      {UI.projects.technologiesUsed}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.techFull.map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                )}

                {project.recruiterText && (
                  <article className="liquid-card rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                      {UI.projects.forRecruiters}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">
                      {project.recruiterText}
                    </p>
                  </article>
                )}

                {(project.link || project.repo) && (
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        {UI.projects.viewProject}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        {UI.projects.repository}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div />
              <article className="liquid-card rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                  {UI.projects.underConstruction}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                  {UI.projects.reservedSpaceTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim sm:text-base">
                  {UI.projects.reservedSpaceText}
                </p>
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                    {UI.projects.openRepository}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export function ProjectsArchivePage() {
  return (
    <main className="relative z-10 min-h-[100svh] overflow-x-hidden pt-32 sm:pt-36">
      <section className="section">
        <div className="container-1200 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={getLocalizedHref('/#projects')} className="btn-ghost">
              <ArrowLeft size={16} />
              {UI.projects.backToPortfolio}
            </a>

            <div className="mt-10">
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
                {UI.projects.allProjects}
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                <span className="text-gradient-static">{UI.projects.titleStart}</span>
                <span className="text-gradient">{UI.projects.titleAccent}</span>
                <span className="text-gradient-static">{UI.projects.titleEnd}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
                {UI.projects.description}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="projects-archive-wrap relative z-10">
          <div className="projects-archive-grid">
            {PROJECTS.map((project, index) => (
              <ArchiveBookCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ArchiveBookCard({ project, index }: { project: Project; index: number }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const visual = PROJECT_VISUALS[index % PROJECT_VISUALS.length]
  const href = project.link ?? getLocalizedHref(`/projetos/${project.id}`)
  const title = project.title.replace(/^Em breve:\s*/i, '')
  const projectNumber = String(index + 1).padStart(2, '0')
  const stackLine = project.tags.slice(0, 2).join(' + ')
  const isPlaceholder = /espaço reservado|em breve|conteúdo será adicionado/i.test(project.description)
  const coverSummary = isPlaceholder
    ? UI.projects.placeholderCover
    : project.description
  const insideSummary = isPlaceholder
    ? UI.projects.placeholderInside
    : project.description
  const isExternal = /^https?:\/\//i.test(href)
  const coverImage = project.mobileImage ?? project.desktopImage ?? project.image

  const handleCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isTouchNavigation = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (!isTouchNavigation || isMobileOpen) return
    event.preventDefault()
    setIsMobileOpen(true)
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="project-book-card project-book-card--archive"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={
        {
          '--project-accent': visual.accent,
          '--project-wash': visual.wash,
          '--project-ghost': visual.ghost,
          ...(coverImage ? { '--project-cover-image': `url("${coverImage}")` } : {}),
        } as CSSProperties
      }
      data-cursor="hover"
      data-project-id={project.id}
      data-has-cover={coverImage ? 'true' : undefined}
      data-mobile-open={isMobileOpen ? 'true' : undefined}
      aria-expanded={isMobileOpen}
      aria-label={UI.common.accessProjectAria(title)}
      onClick={handleCardClick}
    >
      <span className="project-book-card__shadow" aria-hidden />

      <div className="project-book">
        <span className="project-book__back" aria-hidden />
        <span className="project-book__pages project-book__pages--right" aria-hidden />
        <span className="project-book__pages project-book__pages--bottom" aria-hidden />

        <div className="project-book__inside">
          <span className="project-book__inside-fold" />
          <span className="project-book__leaf project-book__leaf--one" />
          <span className="project-book__leaf project-book__leaf--two" />
          <span className="project-book__leaf project-book__leaf--three" />

          <div className="project-book__inside-copy">
            <div className="project-book__inside-meta">
              <span className="project-book__inside-kicker">{UI.common.caseLabel} {projectNumber}</span>
              <span className="project-book__inside-stack">{stackLine || UI.common.featuredProject}</span>
            </div>
            <h4 title={title}>{title}</h4>
            <p>{insideSummary}</p>
            <ul className="project-book__inside-points" aria-label={UI.common.projectSummaryAria(title)}>
              <li>{UI.common.context}</li>
              <li>{UI.common.process}</li>
              <li>{UI.common.result}</li>
            </ul>
            <span className="project-book__inside-button">
              <span>{UI.common.viewDetails}</span>
              <span className="project-book__inside-button-icon">
                <ArrowUpRight size={16} />
              </span>
            </span>
          </div>
        </div>

        <div className="project-book__cover">
          <span className="project-book__grain" aria-hidden />
          <span className="project-book__spine" aria-hidden />
          <span className="project-book__spine-ridge project-book__spine-ridge--top" aria-hidden />
          <span className="project-book__spine-ridge project-book__spine-ridge--bottom" aria-hidden />
          <span className="project-book__cover-liner" aria-hidden />
          <span className="project-book__shine" aria-hidden />

          <div className="project-book__heading">
            <div className="project-book__eyebrow">
              <span>{project.year ?? '2025'}</span>
              <span>{UI.common.caseLabel} {projectNumber}</span>
            </div>
            <ul className="project-book__tags" aria-label={UI.common.projectTechAria(title)}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <h3 title={title} style={getArchiveTitleFontStyle(title)}>{title}</h3>
            <p>{coverSummary}</p>
          </div>

          <div className="project-book__cover-bottom">
            <ProjectDeviceShowcase project={project} index={index} title={title} deviceType={getDeviceType(project)} />
          </div>
        </div>
      </div>
    </motion.a>
  )
}
