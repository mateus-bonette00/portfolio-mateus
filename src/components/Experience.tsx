import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCES } from '../data/portfolio'
import type { Experience as ExperienceItem } from '../types'

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpanded = (key: string) => {
    setExpandedItems((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  return (
    <section
      id="experience"
      data-codex-id="experience-section"
      className="section"
      aria-label="Linha do tempo de experiências profissionais"
    >
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Experiências"
          title={
            <>
              <span className="text-gradient-static">Experiências Que </span>
              <span className="text-gradient">Me Formaram</span>
              <span className="text-gradient-static">.</span>
            </>
          }
          description="Cada empresa, cada projeto e cada venda me ensinou algo que eu carrego até hoje no código, na comunicação e na forma de resolver problemas."
          denseMobile
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center justify-center py-2 sm:mb-10 sm:py-3"
          aria-label="Disponibilidade profissional"
        >
          <div
            className="rounded-full border border-slate-200/85 bg-white/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-ink shadow-soft backdrop-blur-xl dark:border-white/12 dark:bg-white/[0.06] dark:text-slate-100 sm:text-[11px]"
            aria-label="Status: Online Para Novas Oportunidades"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Status • Online Para Novas Oportunidades
            </span>
          </div>
        </motion.div>

        <div className="experience-timeline" aria-label="Trajetória profissional">
          {EXPERIENCES.map((exp, i) => {
            const itemKey = `${exp.company}-${exp.period}`
            const isExpanded = Boolean(expandedItems[itemKey])
            const isExpandable = shouldCollapseExperience(exp)
            const stepBadge = experienceStepBadge(exp, i, EXPERIENCES.length)
            const isTimelineCurrent = exp.isCurrentRole === true

            return (
              <motion.div
                key={itemKey}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                className={`experience-timeline__item ${
                  i % 2 === 1 ? 'experience-timeline__item--reverse' : ''
                }`}
              >
                <div className="experience-timeline__meta">
                  <p className="font-display text-lg font-bold leading-tight text-ink">{exp.company}</p>
                  <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-dim dark:text-slate-300">
                    {exp.period}
                  </p>
                  <span className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent dark:border-accent-neon/25 dark:bg-accent-neon/10 dark:text-accent-neon">
                    {stepBadge}
                  </span>
                </div>

                <div className="experience-timeline__rail" aria-hidden>
                  <TimelineLogo experience={exp} isCurrent={isTimelineCurrent} />
                </div>

                <article
                  className={`experience-timeline__content liquid-card liquid-hover group rounded-2xl p-6 sm:p-7 ${
                    isTimelineCurrent ? 'experience-timeline__content--current' : ''
                  }`}
                  data-cursor="hover"
                >
                  <div className="mb-5 flex items-start justify-between gap-4 md:hidden">
                    <div>
                      <p className="font-display text-base font-bold leading-tight text-ink">
                        {exp.company}
                      </p>
                      <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-dim dark:text-slate-300">
                        {exp.period}
                      </p>
                    </div>
                    <span className="pill shrink-0 font-mono text-[10px] uppercase tracking-[0.16em]">
                      {stepBadge}
                    </span>
                  </div>

                  <div
                    className={`experience-timeline__body ${
                      isExpandable && !isExpanded ? 'experience-timeline__body--collapsed' : ''
                    }`}
                    id={`experience-content-${i}`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 h-0.5 w-12 rounded-full bg-accent/40 dark:bg-accent-neon/50" />
                        <h3 className="font-display text-lg font-bold leading-tight text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-accent dark:text-accent-neon">
                          {exp.company} · {exp.employmentType}
                        </p>
                        <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-dim dark:text-slate-300">
                          {exp.period}
                        </p>
                        {exp.location && (
                          <p className="mt-1 text-xs font-medium text-ink-mute">{exp.location}</p>
                        )}
                      </div>
                      <span className="hidden w-fit shrink-0 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent dark:border-accent-neon/25 dark:bg-accent-neon/10 dark:text-accent-neon sm:inline-flex">
                        {stepBadge}
                      </span>
                    </div>

                    {exp.description && exp.description.length > 0 && (
                      <div className="mt-5 max-w-2xl space-y-3 text-[0.92rem] leading-relaxed text-ink-dim">
                        {exp.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="mt-5 grid gap-2 border-t border-line/60 pt-5 text-sm text-ink-dim dark:border-white/10">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-3 rounded-xl border border-slate-200/80 bg-white/55 px-4 py-3 leading-relaxed transition-colors duration-200 group-hover:border-accent/25 group-hover:bg-white/80 dark:border-white/[0.06] dark:bg-white/[0.03] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.06]"
                          >
                            <span className="shrink-0 font-mono text-accent dark:text-accent-neon">-</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills && (
                      <p className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-semibold leading-relaxed text-ink dark:border-accent-neon/15 dark:bg-accent-neon/5 dark:text-ink">
                        {exp.skills}
                      </p>
                    )}
                  </div>

                  {isExpandable && (
                    <button
                      type="button"
                      className="experience-timeline__more"
                      aria-expanded={isExpanded}
                      aria-controls={`experience-content-${i}`}
                      onClick={() => toggleExpanded(itemKey)}
                    >
                      {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </button>
                  )}
                </article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineLogo({
  experience,
  isCurrent,
}: {
  experience: ExperienceItem
  isCurrent: boolean
}) {
  const fallback = getLogoFallback(experience.company)

  return (
    <span className={`experience-timeline__node ${isCurrent ? 'experience-timeline__node--current' : ''}`}>
      {experience.logoImage ? (
        <img
          src={experience.logoImage}
          alt={experience.logoAlt ?? `Logo da ${experience.company}`}
          className="h-full w-full rounded-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="experience-timeline__node-fallback">{fallback}</span>
      )}
    </span>
  )
}

function getLogoFallback(company: string) {
  const cleanName = company.replace(/[^a-zA-ZÀ-ÿ0-9\s.]/g, ' ').trim()
  const words = cleanName.split(/\s+/).filter(Boolean)

  if (company.toLowerCase().includes('byron')) return 'by'
  if (company.startsWith('CAAI')) return 'CAAI'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function experienceStepBadge(exp: ExperienceItem, index: number, total: number): string {
  if (exp.isCurrentRole === true) return 'Atual'
  if (total > 1 && index === total - 1) return 'Início'
  if (index === 0) return 'Mais recente'
  return 'Etapa'
}

function shouldCollapseExperience(experience: ExperienceItem) {
  const textLength = [
    ...(experience.description ?? []),
    ...(experience.highlights ?? []),
    experience.skills ?? '',
  ].join(' ').length

  return textLength > 420 || (experience.highlights?.length ?? 0) > 3
}
