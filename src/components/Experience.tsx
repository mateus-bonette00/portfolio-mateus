import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Cloud, Database, Download } from 'lucide-react'
import {
  siAngular,
  siDbeaver,
  siDocker,
  siGraphql,
  siHubspot,
  siNextdotjs,
  siPostgresql,
  siPython,
  siRedmine,
  siStreamlit,
} from 'simple-icons'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCES } from '../data/portfolio'
import type { Experience as ExperienceItem } from '../types'

const TECH_ICONS: Record<string, any> = {
  'Angular': { type: 'brand', icon: siAngular, color: '#c3002f' },
  'Next.js': { type: 'brand', icon: siNextdotjs, color: '' }, // Uses currentColor
  'GraphQL': { type: 'brand', icon: siGraphql, color: '#e10098' },
  'PostgreSQL': { type: 'brand', icon: siPostgresql, color: '#4169e1' },
  'Python': { type: 'brand', icon: siPython, color: '#3776ab' },
  'Docker': { type: 'brand', icon: siDocker, color: '#2496ed' },
  'AWS': { type: 'line', icon: Cloud, color: '#FF9900' },
  'Streamlit': { type: 'brand', icon: siStreamlit, color: '#ff4b4b' },
  'HubSpot': { type: 'brand', icon: siHubspot, color: '#ff7a59' },
  'Redmine': { type: 'brand', icon: siRedmine, color: '#b32024' },
  'DBeaver': { type: 'brand', icon: siDbeaver, color: '#382923' },
  'PgAdmin': { type: 'line', icon: Database, color: '#336791' },
}

function ExperienceTechTag({ name }: { name: string }) {
  const iconData = TECH_ICONS[name]
  if (!iconData) return null

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/80 bg-white/60 shadow-sm dark:border-white/10 dark:bg-white/5">
        {iconData.type === 'brand' ? (
          <svg aria-hidden className={`h-5 w-5 ${iconData.color ? '' : 'fill-ink'}`} viewBox="0 0 24 24" fill={iconData.color || 'currentColor'}>
            <path d={iconData.icon.path} />
          </svg>
        ) : (
          <iconData.icon aria-hidden className="h-5 w-5" color={iconData.color} strokeWidth={2.5} />
        )}
      </div>
      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-ink-dim">
        {name}
      </span>
    </div>
  )
}

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
                  
                  {exp.company === 'Moontech' && (
                    <div className="mt-7 hidden md:block">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex w-fit items-center justify-center gap-2 rounded-full border border-blue-400/60 bg-[linear-gradient(135deg,#1e3a8a80,#1d4ed84d)] px-4 py-2 text-[11px] font-bold tracking-widest text-white shadow-[0_0_0_1px_rgb(147_197_253/0.28),0_10px_28px_-10px_rgb(30_64_175/0.65)] backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none dark:border-blue-400/60"
                        style={{ animation: 'whatsapp-blink 1.15s ease-in-out infinite' }}
                        title="Baixar PDF da Carta de Recomendação"
                      >
                        {/* TODO: substituir pelo link do PDF da carta de recomendação */}
                        <span
                          aria-hidden
                          className="absolute inset-[-9px] -z-10 rounded-full bg-[radial-gradient(circle,rgb(96_165_250/_0.52)_0%,rgb(59_130_246/_0.28)_42%,transparent_75%)] blur-[5px]"
                          style={{ animation: 'whatsapp-glow-pulse 1.15s ease-in-out infinite' }}
                        />
                        <Download size={14} className="relative z-10 shrink-0" strokeWidth={2.5} />
                        <span className="relative z-10 font-medium">Carta De Recomendação</span>
                      </a>
                    </div>
                  )}
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
                  <div className="mb-5 flex flex-col items-start gap-4 md:hidden">
                    <div className="flex w-full items-start justify-between gap-4">
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

                    {exp.company === 'Moontech' && (
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative mt-1 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-blue-400/60 bg-[linear-gradient(135deg,#1e3a8a80,#1d4ed84d)] px-4 py-2 text-[11px] font-bold tracking-widest text-white shadow-[0_0_0_1px_rgb(147_197_253/0.28),0_10px_28px_-10px_rgb(30_64_175/0.65)] backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none dark:border-blue-400/60"
                        style={{ animation: 'whatsapp-blink 1.15s ease-in-out infinite' }}
                        title="Baixar PDF da Carta de Recomendação"
                      >
                        {/* TODO: substituir pelo link do PDF da carta de recomendação */}
                        <span
                          aria-hidden
                          className="absolute inset-[-9px] -z-10 rounded-full bg-[radial-gradient(circle,rgb(96_165_250/_0.52)_0%,rgb(59_130_246/_0.28)_42%,transparent_75%)] blur-[5px]"
                          style={{ animation: 'whatsapp-glow-pulse 1.15s ease-in-out infinite' }}
                        />
                        <Download size={14} className="relative z-10 shrink-0" strokeWidth={2.5} />
                        <span className="relative z-10 font-medium">Carta De Recomendação</span>
                      </a>
                    )}
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
                            <ChevronRight size={16} className="mt-[2px] shrink-0 text-accent dark:text-accent-neon" />
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

                    {exp.techTags && exp.techTags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-4 rounded-xl border border-line/60 bg-white/30 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                        {exp.techTags.map((tag) => (
                          <ExperienceTechTag key={tag} name={tag} />
                        ))}
                      </div>
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
