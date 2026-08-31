import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  ChevronRight,
  Cloud,
  Database,
  Download,
  Layers,
  LayoutTemplate,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  siAngular,
  siAnthropic,
  siDbeaver,
  siDeepseek,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siGithubcopilot,
  siGooglecloud,
  siGooglegemini,
  siGooglesheets,
  siGraphql,
  siHubspot,
  siHuggingface,
  siJavascript,
  siLangchain,
  siMeta,
  siMistralai,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPerplexity,
  siPostgresql,
  siPython,
  siReact,
  siRedmine,
  siStreamlit,
  siTrello,
  siTypescript,
  siWhatsapp,
  type SimpleIcon,
} from 'simple-icons'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCES, UI } from '../data/portfolio'
import type { Experience as ExperienceItem } from '../types'

const MOONTECH_CARTA_PT = '/2026-04-26_Carta_de_Recomendacao_assinado.pdf'
const MOONTECH_CARTA_EN = '/2026-04-26_Carta_de_Recomendacao_en_assinado.pdf'
const SHOW_MOONTECH_RECOMMENDATION_LETTERS = false

const MOONTECH_REC_BTN_SKIN =
  'group relative inline-flex touch-manipulation items-center justify-center rounded-full border border-blue-400/60 bg-[linear-gradient(135deg,#1e3a8a80,#1d4ed84d)] font-bold text-white shadow-[0_0_0_1px_rgb(147_197_253/0.28),0_10px_28px_-10px_rgb(30_64_175/0.65)] backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none dark:border-blue-400/60'

const MOONTECH_REC_DESKTOP_SIZES = 'gap-2.5 px-6 py-3.5 text-xs tracking-widest sm:px-7 sm:py-4 sm:text-sm'

function MoontechRecommendationLetterLinks({
  variant,
  timelineMetaFlipped = false,
}: {
  variant: 'desktop' | 'mobile'
  timelineMetaFlipped?: boolean
}) {
  if (!SHOW_MOONTECH_RECOMMENDATION_LETTERS) return null

  const wrapClass =
    variant === 'desktop'
      ? timelineMetaFlipped
        ? 'mt-7 mr-auto hidden w-max max-w-full flex-col items-start gap-2.5 md:flex'
        : 'mt-7 ml-auto hidden w-max max-w-full flex-col items-end gap-2.5 md:flex'
      : 'mt-2 flex w-full min-w-0 max-w-full flex-col gap-2.5 self-stretch md:hidden'

  const link = (
    href: string,
    label: string,
    title: string,
    opts?: { englishDesktopSingleLine?: boolean; downloadAs?: string },
  ) => {
    const englishDesktopSingleLine = Boolean(opts?.englishDesktopSingleLine)
    return (
    <a
      href={href}
      download={opts?.downloadAs ?? true}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === 'desktop'
          ? englishDesktopSingleLine
            ? `${MOONTECH_REC_BTN_SKIN} ${MOONTECH_REC_DESKTOP_SIZES} w-fit min-w-[416px] max-w-[calc(100vw-2rem)] whitespace-nowrap`
            : `${MOONTECH_REC_BTN_SKIN} ${MOONTECH_REC_DESKTOP_SIZES} w-fit min-w-0 max-w-[min(22rem,calc(100vw-3rem))]`
          : `${MOONTECH_REC_BTN_SKIN} w-full min-w-0 max-w-full gap-2 px-4 py-3.5 text-[10px] leading-snug tracking-[0.08em] sm:gap-2.5 sm:px-5 sm:py-4 sm:text-[11px] sm:tracking-[0.12em]`
      }
      style={{ animation: 'whatsapp-blink 1.15s ease-in-out infinite' }}
      title={title}
    >
      <span
        aria-hidden
        className="absolute inset-[-5px] -z-10 rounded-full bg-[radial-gradient(circle,rgb(96_165_250/_0.52)_0%,rgb(59_130_246/_0.28)_42%,transparent_75%)] blur-[5px]"
        style={{ animation: 'whatsapp-glow-pulse 1.15s ease-in-out infinite' }}
      />
      <Download
        size={variant === 'mobile' ? 16 : 18}
        className="relative z-10 shrink-0"
        strokeWidth={2.5}
      />
      <span
        className={`relative z-10 min-w-0 font-medium leading-snug ${
          variant === 'mobile'
            ? 'flex-1 text-center break-words [overflow-wrap:anywhere]'
            : variant === 'desktop' && englishDesktopSingleLine
              ? 'whitespace-nowrap'
              : 'text-center'
        }`}
      >
        {label}
      </span>
    </a>
    )
  }

  return (
    <div className={wrapClass}>
      {link(MOONTECH_CARTA_PT, UI.experience.moontechLetterPt, UI.experience.moontechLetterPtTitle, {
        downloadAs: '2026-04-26_Carta_de_Recomendacao_assinado.pdf',
      })}
      {link(MOONTECH_CARTA_EN, UI.experience.moontechLetterEn, UI.experience.moontechLetterEnTitle, {
        englishDesktopSingleLine: true,
        downloadAs: '2026-04-26_Carta_de_Recomendacao_en_assinado.pdf',
      })}
    </div>
  )
}

type BrandTechIcon = { type: 'brand'; icon: SimpleIcon; color: string }
type LineTechIcon = { type: 'line'; icon: LucideIcon; color: string }
type TechIconEntry = BrandTechIcon | LineTechIcon

const DEFAULT_TECH_ICON: LineTechIcon = { type: 'line', icon: Sparkles, color: '#6366f1' }

const TECH_ICONS: Record<string, TechIconEntry> = {
  Angular: { type: 'brand', icon: siAngular, color: '#c3002f' },
  'Next.js': { type: 'brand', icon: siNextdotjs, color: '' },
  GraphQL: { type: 'brand', icon: siGraphql, color: '#e10098' },
  PostgreSQL: { type: 'brand', icon: siPostgresql, color: '#4169e1' },
  Python: { type: 'brand', icon: siPython, color: '#3776ab' },
  JavaScript: { type: 'brand', icon: siJavascript, color: '#c9a227' },
  TypeScript: { type: 'brand', icon: siTypescript, color: '#3178c6' },
  React: { type: 'brand', icon: siReact, color: '#149eca' },
  'Node.js': { type: 'brand', icon: siNodedotjs, color: '#339933' },
  Docker: { type: 'brand', icon: siDocker, color: '#2496ed' },
  AWS: { type: 'line', icon: Cloud, color: '#FF9900' },
  Cloud: { type: 'brand', icon: siGooglecloud, color: '#4285f4' },
  Streamlit: { type: 'brand', icon: siStreamlit, color: '#ff4b4b' },
  HubSpot: { type: 'brand', icon: siHubspot, color: '#ff7a59' },
  Redmine: { type: 'brand', icon: siRedmine, color: '#b32024' },
  DBeaver: { type: 'brand', icon: siDbeaver, color: '#382923' },
  PgAdmin: { type: 'line', icon: Database, color: '#336791' },
  'Google Sheets': { type: 'brand', icon: siGooglesheets, color: '#34a853' },
  Git: { type: 'brand', icon: siGit, color: '#f05032' },
  GitHub: { type: 'brand', icon: siGithub, color: '' },
  Figma: { type: 'brand', icon: siFigma, color: '#f24e1e' },
  Trello: { type: 'brand', icon: siTrello, color: '#0052cc' },
  WhatsApp: { type: 'brand', icon: siWhatsapp, color: '#25d366' },
  'WhatsApp Bot': { type: 'brand', icon: siWhatsapp, color: '#25d366' },
  n8n: { type: 'brand', icon: siN8n, color: '#ea4b71' },
  ChatGPT: { type: 'line', icon: Bot, color: '#10a37f' },
  GPT: { type: 'line', icon: Bot, color: '#10a37f' },
  'UX/UI': { type: 'line', icon: LayoutTemplate, color: '#ec4899' },
  UX: { type: 'line', icon: LayoutTemplate, color: '#ec4899' },
  Claude: { type: 'brand', icon: siAnthropic, color: '#d4a574' },
  Gemini: { type: 'brand', icon: siGooglegemini, color: '#8e75ff' },
  Llama: { type: 'brand', icon: siMeta, color: '#0467df' },
  LangChain: { type: 'brand', icon: siLangchain, color: '#1c3c3c' },
  'Hugging Face': { type: 'brand', icon: siHuggingface, color: '#ffd21e' },
  Ollama: { type: 'brand', icon: siOllama, color: '' },
  DeepSeek: { type: 'brand', icon: siDeepseek, color: '#4d6bfe' },
  Mistral: { type: 'brand', icon: siMistralai, color: '#fa520a' },
  Perplexity: { type: 'brand', icon: siPerplexity, color: '#20b8cd' },
  Copilot: { type: 'brand', icon: siGithubcopilot, color: '' },
  'IA Generativa': { type: 'line', icon: Sparkles, color: '#a855f7' },
  'IA Aplicada': { type: 'line', icon: Bot, color: '#6366f1' },
  LLMs: { type: 'line', icon: Bot, color: '#6366f1' },
  'Engenharia de IA': { type: 'line', icon: Bot, color: '#6366f1' },
  'Agentes de IA': { type: 'line', icon: Bot, color: '#6366f1' },
  OpenClaw: { type: 'line', icon: Bot, color: '#0ea5e9' },
  Automação: { type: 'line', icon: Workflow, color: '#0ea5e9' },
  'Full Stack': { type: 'line', icon: Layers, color: '#2563eb' },
  APIs: { type: 'line', icon: Layers, color: '#2563eb' },
  'APIs REST': { type: 'line', icon: Layers, color: '#2563eb' },
}

function ExperienceTechTag({ name }: { name: string }) {
  const iconData = TECH_ICONS[name] ?? DEFAULT_TECH_ICON
  const LineIcon = iconData.type === 'line' ? iconData.icon : null

  return (
    <div className="flex min-w-[4.5rem] max-w-[5.75rem] flex-col items-center justify-start gap-2">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/80 bg-white/60 shadow-sm dark:border-white/10 dark:bg-white/5">
        {iconData.type === 'brand' ? (
          <svg
            aria-hidden
            className={`h-5 w-5 ${iconData.color ? '' : 'fill-ink'}`}
            viewBox="0 0 24 24"
            fill={iconData.color || 'currentColor'}
          >
            <path d={iconData.icon.path} />
          </svg>
        ) : LineIcon ? (
          <LineIcon aria-hidden className="h-5 w-5" color={iconData.color} strokeWidth={2.5} />
        ) : null}
      </div>
      <span className="w-full text-center font-mono text-[9px] font-bold uppercase leading-tight tracking-widest text-ink-dim">
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
      className="section"
      aria-label={UI.experience.aria}
    >
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow={UI.experience.eyebrow}
          title={
            <>
              <span className="text-gradient-static">{UI.experience.titleStart}</span>
              <span className="text-gradient">{UI.experience.titleAccent}</span>
              <span className="text-gradient-static">{UI.experience.titleEnd}</span>
            </>
          }
          description={UI.experience.description}
          descriptionClassName="max-w-4xl lg:max-w-5xl"
        />


        <div className="experience-timeline" aria-label={UI.experience.timelineAria}>
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
                    <MoontechRecommendationLetterLinks variant="desktop" timelineMetaFlipped={i % 2 === 1} />
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
                  <div className="mb-5 flex w-full min-w-0 flex-col items-stretch gap-4 md:hidden">
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

                    {exp.company === 'Moontech' && <MoontechRecommendationLetterLinks variant="mobile" />}
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
                      <div className="experience-timeline__copy mt-5 space-y-3">
                        {exp.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="experience-timeline__highlights mt-5 grid gap-2 border-t border-line/60 pt-5 dark:border-white/10">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-3 rounded-xl border border-slate-200/80 bg-white/55 px-4 py-3 leading-relaxed transition-colors duration-200 group-hover:border-accent/25 group-hover:bg-white/80 dark:border-white/[0.06] dark:bg-white/[0.03] dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.06]"
                          >
                            <ChevronRight size={18} className="mt-0.5 shrink-0 text-accent dark:text-accent-neon" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills && (
                      <p className="experience-timeline__skills mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 font-semibold text-ink dark:border-accent-neon/15 dark:bg-accent-neon/5 dark:text-white">
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
                      {isExpanded ? UI.common.readLess : UI.common.readMore}
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
          alt={experience.logoAlt ?? `${experience.company} logo`}
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
  if (exp.isCurrentRole === true) return UI.experience.current
  if (total > 1 && index === total - 1) return UI.experience.start
  if (index === 0) return UI.experience.latest
  return UI.experience.step
}

function shouldCollapseExperience(experience: ExperienceItem) {
  const textLength = [
    ...(experience.description ?? []),
    ...(experience.highlights ?? []),
    experience.skills ?? '',
  ].join(' ').length

  return textLength > 420 || (experience.highlights?.length ?? 0) > 3
}
