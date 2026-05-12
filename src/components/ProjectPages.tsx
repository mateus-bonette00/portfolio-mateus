import { type CSSProperties, type MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'
import { ProjectDeviceShowcase, getDeviceType, getArchiveTitleFontStyle } from './Projects'

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
          <a href="/#projects" className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar para projetos
          </a>
          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
              Projeto não encontrado
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Esse projeto ainda não existe.
            </h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative z-10 min-h-[70svh] pt-36">
      <section className="section">
        <div className="container-1200">
          <a href="/#projects" className="btn-ghost">
            <ArrowLeft size={16} />
            Voltar para projetos
          </a>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
                Projeto
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gradient-static sm:text-6xl">
                {project.title.replace(/^Em breve:\s*/i, '')}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
                {project.description}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <article className="liquid-card rounded-2xl p-6 sm:p-8">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
                Conteúdo em construção
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Espaço reservado para o case completo.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim sm:text-base">
                Aqui pode entrar problema, solução, imagens, resultado, links, aprendizados e qualquer material específico desse projeto.
              </p>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                  Abrir repositório
                  <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          </div>
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
            <a href="/#projects" className="btn-ghost">
              <ArrowLeft size={16} />
              Voltar para o portfólio
            </a>

            <div className="mt-10">
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-ink-mute">
                Todos os projetos
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                <span className="text-gradient-static">Projetos Que Me Fizeram </span>
                <span className="text-gradient">Crescer</span>
                <span className="text-gradient-static">.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
                Da primeira linha de código na faculdade até sistemas entregues, vendidos e em produção. Aqui está o que construí em cada fase, com contexto, tecnologia e propósito.
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
  const href = project.link ?? `/projetos/${project.id}`
  const title = project.title.replace(/^Em breve:\s*/i, '')
  const projectNumber = String(index + 1).padStart(2, '0')
  const stackLine = project.tags.slice(0, 2).join(' + ')
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
      className="project-book-card project-book-card--archive"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: 0.08 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
            <h3 title={title} style={getArchiveTitleFontStyle(title)}>{title}</h3>
            <p>{coverSummary}</p>
          </div>

          <ProjectDeviceShowcase project={project} index={index} title={title} deviceType={getDeviceType(project)} />

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
