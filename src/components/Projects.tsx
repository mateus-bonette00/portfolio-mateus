import { type CSSProperties, type MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PROJECTS, UI } from '../data/portfolio'
import type { Project } from '../types'
import { getLocalizedHref } from '../i18n/routes'

const PROJECT_VISUALS = [
  {
    accent: '#60A5FA',
    wash: 'rgba(96, 165, 250, 0.22)',
    ghost: 'rgba(34, 211, 238, 0.08)',
  },
  {
    accent: '#22D3EE',
    wash: 'rgba(34, 211, 238, 0.2)',
    ghost: 'rgba(59, 130, 246, 0.1)',
  },
  {
    accent: '#93C5FD',
    wash: 'rgba(147, 197, 253, 0.2)',
    ghost: 'rgba(251, 191, 36, 0.08)',
  },
  {
    accent: '#FBBF24',
    wash: 'rgba(251, 191, 36, 0.16)',
    ghost: 'rgba(96, 165, 250, 0.1)',
  },
]

export function Projects() {
  return (
    <section id="projects" data-codex-id="projects-section" className="section overflow-hidden">
      <div className="container-1200 relative z-10">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow={UI.projects.eyebrow}
            title={
              <>
                <span className="text-gradient-static">{UI.projects.titleStart}</span>
                <span className="text-gradient">{UI.projects.titleAccent}</span>
                <span className="text-gradient-static">{UI.projects.titleEnd}</span>
              </>
            }
            description={UI.projects.description}
          />

          <div className="hidden max-w-[14rem] border-l border-accent/30 pl-4 pb-10 lg:block">
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-ink-mute">
              {UI.projects.featuredCases}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              {UI.projects.featuredCasesDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="projects-case-bleed">
        <div className="projects-case-scroll" aria-label={UI.projects.carouselAria}>
          <div className="projects-case-track">
            {PROJECTS.slice(0, 6).map((project, index) => (
              <ProjectCaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
        <div className="projects-case-view-all-wrap">
          <a href={getLocalizedHref('/projetos')} className="projects-view-all" data-cursor="hover">
            <span aria-hidden className="projects-view-all__glow" />
            <span className="projects-view-all__text">{UI.projects.viewAll}</span>
            <ArrowUpRight size={30} className="projects-view-all__icon relative z-[2] shrink-0" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCaseCard({ project, index }: { project: Project; index: number }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const visual = PROJECT_VISUALS[index % PROJECT_VISUALS.length]
  const href = project.link ?? getLocalizedHref(`/projetos/${project.id}`)
  const title = project.title.replace(/^Em breve:\s*/i, '')
  const projectNumber = String(index + 1).padStart(2, '0')
  const stackLine = project.tags.slice(0, 2).join(' + ')
  const deviceType = getDeviceType(project)
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
      className="project-book-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={
        {
          '--project-accent': visual.accent,
          '--project-wash': visual.wash,
          '--project-ghost': visual.ghost,
          ...(coverImage ? { '--project-cover-image': `url("${coverImage}")` } : {}),
        } as CSSProperties
      }
      data-has-cover={coverImage ? 'true' : undefined}
      data-cursor="hover"
      data-project-id={project.id}
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
            <h3 title={title} style={getTitleFontStyle(title)}>{title}</h3>
            <p>{coverSummary}</p>
          </div>

          <div className="project-book__cover-bottom">
            <ProjectDeviceShowcase project={project} index={index} title={title} deviceType={deviceType} />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export function getDeviceType(project: Project): 'desktop' | 'mobile' {
  if (project.deviceType) return project.deviceType
  const mobileOnlyTags = /react native|flutter|swift|kotlin|android|ios|mobile/i
  return project.tags.some((tag) => mobileOnlyTags.test(tag)) ? 'mobile' : 'desktop'
}

export function getTitleFontStyle(title: string): CSSProperties {
  const words = title.split(/\s+/)
  const longest = Math.max(...words.map(w => w.length))
  const wordCount = words.length
  const totalLen = title.replace(/\s+/g, '').length

  if (longest <= 5 && wordCount <= 2) return { fontSize: 'clamp(1.25rem, 1.7vw, 2.0rem)' }
  if (longest <= 6 && wordCount <= 3) return { fontSize: 'clamp(1.1rem, 1.5vw, 1.8rem)' }
  if (longest <= 8 && totalLen <= 18) return { fontSize: 'clamp(1.0rem, 1.3vw, 1.6rem)' }
  if (longest <= 10 && wordCount <= 3) return { fontSize: 'clamp(0.88rem, 1.15vw, 1.4rem)' }
  return { fontSize: 'clamp(0.78rem, 1.0vw, 1.25rem)' }
}

export function getArchiveTitleFontStyle(title: string): CSSProperties {
  const words = title.split(/\s+/)
  const longest = Math.max(...words.map(w => w.length))
  const wordCount = words.length
  const totalLen = title.replace(/\s+/g, '').length

  if (longest <= 5 && wordCount <= 2) return { fontSize: 'clamp(1.15rem, 1.55vw, 1.88rem)' }
  if (longest <= 6 && wordCount <= 3) return { fontSize: 'clamp(1.0rem, 1.38vw, 1.68rem)' }
  if (longest <= 8 && totalLen <= 18) return { fontSize: 'clamp(0.92rem, 1.2vw, 1.5rem)' }
  if (longest <= 10 && wordCount <= 3) return { fontSize: 'clamp(0.82rem, 1.05vw, 1.3rem)' }
  return { fontSize: 'clamp(0.72rem, 0.92vw, 1.15rem)' }
}

export function ProjectDeviceShowcase({
  project,
  index,
  title,
  deviceType,
}: {
  project: Project
  index: number
  title: string
  deviceType: 'desktop' | 'mobile'
}) {
  const isDesktop = deviceType === 'desktop'
  const previewImage = isDesktop
    ? (project.desktopImage ?? project.image)
    : (project.mobileImage ?? project.image)
  const previewStyle = previewImage
    ? ({ '--project-preview-image': `url("${previewImage}")` } as CSSProperties)
    : undefined

  return (
    <div
      className={`project-device project-device--${deviceType}`}
      style={previewStyle}
      data-has-preview={previewImage ? 'true' : undefined}
      aria-hidden
    >
      {isDesktop ? (
        <div className="project-device__monitor">
          <div className="project-device__monitor-frame">
            <div className="project-device__desktop-screen">
              {previewImage ? (
                <img
                  className="project-device__preview-img"
                  src={previewImage}
                  alt={`Preview do projeto ${title}`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              ) : (
                <>
                  <span className="project-device__window-bar" />
                  <ProjectGlyph index={index} />
                  <span title={title}>{title}</span>
                </>
              )}
            </div>
          </div>
          <span className="project-device__monitor-stand" />
        </div>
      ) : (
        <div className="project-device__phone">
          <div className="project-device__phone-frame">
            <span className="project-device__notch" />
            <div className="project-device__screen">
              {previewImage ? (
                <img
                  className="project-device__preview-img project-device__preview-img--phone"
                  src={previewImage}
                  alt={`Preview do projeto ${title}`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              ) : (
                <>
                  <ProjectGlyph index={index} />
                  <span title={title}>{title}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <span className="project-device__badge">
        {isDesktop ? 'Web app' : 'Mobile app'}
      </span>
    </div>
  )
}

export function ProjectGlyph({ index }: { index: number }) {
  const variants = [
    <svg key="0" width="112" height="112" viewBox="0 0 120 120" aria-hidden>
      <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="27" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="12" fill="currentColor" opacity="0.35" />
      <path d="M60 16v88M16 60h88" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="1" width="112" height="112" viewBox="0 0 120 120" aria-hidden>
      <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="35" y="35" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 20l80 80M100 20L20 100" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
    </svg>,
    <svg key="2" width="112" height="112" viewBox="0 0 120 120" aria-hidden>
      <polygon points="60,14 102,86 18,86" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="60,32 86,80 34,80" fill="currentColor" opacity="0.16" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="3" width="112" height="112" viewBox="0 0 120 120" aria-hidden>
      <path d="M18 60 Q60 14 102 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 60 Q60 106 102 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="7" fill="currentColor" opacity="0.7" />
    </svg>,
  ]

  return variants[index % variants.length]
}
