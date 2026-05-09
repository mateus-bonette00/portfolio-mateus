import { type CSSProperties, type MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'

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
            eyebrow="Projetos"
            title={
              <>
                <span className="text-gradient-static">Trabalhos que </span>
                <span className="text-gradient">construí</span>
                <span className="text-gradient-static">.</span>
              </>
            }
            description="Seleção em construção. Em breve, casos completos com problema, processo e resultado."
          />

          <div className="hidden max-w-[14rem] border-l border-accent/30 pl-4 pb-10 lg:block">
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-ink-mute">
              Cases em destaque
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Cada capa abre uma página própria com detalhes do projeto.
            </p>
          </div>
        </div>
      </div>

      <div className="projects-case-bleed">
        <div className="projects-case-scroll" aria-label="Carrossel horizontal de projetos">
          <div className="projects-case-track">
            {PROJECTS.map((project, index) => (
              <ProjectCaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
        <div className="projects-case-view-all-wrap">
          <a href="/projetos" className="projects-view-all" data-cursor="hover">
            <span aria-hidden className="projects-view-all__glow" />
            <span className="projects-view-all__text">Ver todos os projetos</span>
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
  const href = project.link ?? `/projetos/${project.id}`
  const title = project.title.replace(/^Em breve:\s*/i, '')
  const projectNumber = String(index + 1).padStart(2, '0')
  const stackLine = project.tags.slice(0, 2).join(' + ')
  const platform = getProjectPlatform(project)
  const isPlaceholder = /espaço reservado|em breve|conteúdo será adicionado/i.test(project.description)
  const coverSummary = isPlaceholder
    ? 'Case em preparação para mostrar problema, solução, processo e resultado.'
    : project.description
  const insideSummary = isPlaceholder
    ? 'Página reservada para o case completo, com contexto, decisões técnicas e resultado final.'
    : project.description
  const isExternal = /^https?:\/\//i.test(href)
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
        } as CSSProperties
      }
      data-cursor="hover"
      data-mobile-open={isMobileOpen ? 'true' : undefined}
      aria-expanded={isMobileOpen}
      aria-label={`Acessar projeto ${title}`}
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
              <span className="project-book__inside-kicker">Case {projectNumber}</span>
              <span className="project-book__inside-stack">{stackLine || 'Projeto em destaque'}</span>
            </div>
            <h4 title={title}>{title}</h4>
            <p>{insideSummary}</p>
            <ul className="project-book__inside-points" aria-label={`Resumo do case ${title}`}>
              <li>Contexto</li>
              <li>Processo</li>
              <li>Resultado</li>
            </ul>
            <span className="project-book__inside-button">
              <span>Ver detalhes</span>
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
              <span>{stackLine}</span>
            </div>
            <h3 title={title}>{title}</h3>
            <p>{coverSummary}</p>
          </div>

          <div className="project-book__seal" aria-hidden>
            <img
              src="/images/logo-branca-mateus.png"
              alt=""
              className="project-book__seal-logo"
              draggable={false}
            />
            <small>Portfolio case</small>
          </div>

          <ProjectDeviceShowcase project={project} index={index} title={title} platform={platform} />

          <ul className="project-book__tags" aria-label={`Tecnologias do projeto ${title}`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.a>
  )
}

function getProjectPlatform(project: Project): NonNullable<Project['platform']> {
  if (project.platform) return project.platform

  const mobileOnlyTags = /react native|flutter|swift|kotlin|android|ios|mobile/i
  return project.tags.some((tag) => mobileOnlyTags.test(tag)) ? 'mobile' : 'responsive'
}

function ProjectDeviceShowcase({
  project,
  index,
  title,
  platform,
}: {
  project: Project
  index: number
  title: string
  platform: NonNullable<Project['platform']>
}) {
  const isMobileOnly = platform === 'mobile'
  const desktopImage = project.desktopImage ?? project.image
  const mobileImage = project.mobileImage ?? project.image

  return (
    <div className={`project-device project-device--${platform}`} aria-hidden>
      {!isMobileOnly && (
        <div className="project-device__monitor">
          <div className="project-device__monitor-frame">
            <div className="project-device__desktop-screen">
              {desktopImage ? (
                <img src={desktopImage} alt="" draggable={false} />
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
      )}

      <div className="project-device__phone">
        <div className="project-device__phone-frame">
          <span className="project-device__notch" />
          <div className="project-device__screen">
            {mobileImage ? (
              <img src={mobileImage} alt="" draggable={false} />
            ) : (
              <>
                <ProjectGlyph index={index} />
                <span title={title}>{title}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <span className="project-device__badge">
        {isMobileOnly ? 'Mobile app' : 'Desktop + mobile'}
      </span>
    </div>
  )
}

function ProjectGlyph({ index }: { index: number }) {
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
