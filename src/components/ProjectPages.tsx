import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PROJECTS, UI } from '../data/portfolio'
import { ConsoleProjectCard, PromptBar, matchesProject } from './Projects'
import { ProjectGallery } from './ProjectGallery'
import { getLocalizedHref } from '../i18n/routes'

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
  const hasProjectMedia = !!project.video || !!(project.gallery && project.gallery.length > 0)

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

          {hasProjectMedia && (
            <div className="mt-8">
              <ProjectGallery
                images={project.gallery}
                video={project.video}
                videoPoster={project.videoPoster ?? project.image ?? project.desktopImage}
                title={title}
              />
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

          <ArchiveConsole />
        </div>
      </section>
    </main>
  )
}

function ArchiveConsole() {
  const [query, setQuery] = useState('')
  const strings = UI.projects.console
  const matched = PROJECTS.filter((project) => matchesProject(project, query))

  return (
    <>
      <div className="ai-console archive-console">
        <div className="ai-console__bar">
          <span className="ai-console__dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className="ai-console__window-title">{strings.windowTitle}</span>
          <span className="ai-console__badge" aria-hidden>
            <span className="ai-console__pulse" />
            {strings.statusReady}
          </span>
        </div>
        <div className="archive-console__body">
          <PromptBar
            value={query}
            matchCount={matched.length}
            onChange={setQuery}
            onSubmit={setQuery}
          />
        </div>
        <div className="ai-console__status" aria-hidden>
          <span className="ai-console__status-item">
            <span className="ai-console__pulse" />
            {strings.statusReady}
          </span>
          <span className="ai-console__status-item">{strings.statusLoaded(matched.length)}</span>
          <span className="ai-console__status-item ai-console__status-item--model">
            {strings.statusModel}
          </span>
        </div>
      </div>

      {matched.length > 0 ? (
        <div className="console-grid" role="list" aria-label={UI.projects.allProjects}>
          {matched.map((project, index) => (
            <ConsoleProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="console-empty" role="status">
          {strings.promptEmpty(query.trim())}
        </p>
      )}
    </>
  )
}
