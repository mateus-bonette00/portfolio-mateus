import { type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { UI } from '../data/portfolio'
import type { Project } from '../types'

export function cleanProjectTitle(title: string) {
  return title.replace(/^Em breve:\s*/i, '')
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {text.split('\n\n').map((para) => (
        <p key={para.slice(0, 48)} className="text-sm leading-relaxed text-ink-dim sm:text-base">
          {para}
        </p>
      ))}
    </div>
  )
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="liquid-card rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold leading-snug text-ink sm:text-[1.65rem]">
        {title}
      </h2>
      {children}
    </article>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-ink-mute">
      {children}
    </p>
  )
}

export function ProjectRepoLinks({ project }: { project: Project }) {
  if (!project.link && !project.repo) return null

  return (
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
  )
}

export function LongformProjectBody({ project }: { project: Project }) {
  return (
    <div className="mt-14 flex flex-col gap-8">
      {project.opening && (
        <article className="liquid-card rounded-2xl p-6 sm:p-8">
          <Eyebrow>{UI.projects.openingLabel}</Eyebrow>
          <blockquote className="project-opening mt-4">
            <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{project.opening}</p>
          </blockquote>
        </article>
      )}

      {project.descriptionFull && (
        <SectionCard title={project.aboutTitle ?? UI.projects.aboutProject}>
          <Paragraphs text={project.descriptionFull} />
        </SectionCard>
      )}

      {project.howItWorks && project.howItWorks.length > 0 && (
        <SectionCard title={project.howItWorksTitle ?? UI.projects.aboutProject}>
          <ol className="project-steps mt-4">
            {project.howItWorks.map((step, index) => (
              <li key={step.slice(0, 40)} className="project-steps__item">
                <span className="project-steps__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </SectionCard>
      )}

      {project.rules && project.rules.length > 0 && (
        <SectionCard title={project.rulesTitle ?? UI.projects.technicalHighlights}>
          <div className="project-rules-wrap mt-5">
            <table className="project-rules">
              <caption className="sr-only">{project.rulesTitle}</caption>
              <thead>
                <tr>
                  <th scope="col">{UI.projects.ruleCriterion}</th>
                  <th scope="col">{UI.projects.ruleImplemented}</th>
                </tr>
              </thead>
              <tbody>
                {project.rules.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <SectionCard title={project.highlightsTitle ?? UI.projects.technicalHighlights}>
          <ul className="mt-4 flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item.slice(0, 40)} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim sm:text-base">
                <span className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>
      )}

      {project.recruiterText && (
        <SectionCard title={UI.projects.forRecruiters}>
          <Paragraphs text={project.recruiterText} />
        </SectionCard>
      )}

      {project.faq && project.faq.length > 0 && (
        <SectionCard title={project.faqTitle ?? UI.projects.aboutProject}>
          <dl className="project-faq mt-4">
            {project.faq.map((item) => (
              <div key={item.question} className="project-faq__item">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </SectionCard>
      )}

      {project.techFull && project.techFull.length > 0 && (
        <article className="liquid-card rounded-2xl p-6 sm:p-8">
          <Eyebrow>{UI.projects.technologiesUsed}</Eyebrow>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techFull.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </article>
      )}

      <ProjectRepoLinks project={project} />
    </div>
  )
}

export function isLongformProject(project: Project) {
  return Boolean(
    project.opening || project.howItWorks?.length || project.rules?.length || project.faq?.length,
  )
}
