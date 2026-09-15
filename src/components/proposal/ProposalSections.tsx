import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ClipboardList,
  Code2,
  Compass,
  ExternalLink,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  Layers,
  MapPin,
  MessageCircleQuestion,
  MonitorSmartphone,
  QrCode,
  Quote,
  RefreshCw,
  Rocket,
  Search,
  SearchCheck,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { memo, useEffect, useState, type ReactNode } from 'react'
import { PROFILE_IMAGE_PATH } from '../../constants/assets'
import type { Proposal } from '../../types/proposal'
import { Logo } from '../Logo'
import { SectionTitle } from '../SectionTitle'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, Code2, SearchCheck, Rocket]
const PRICING_MODULE_ICONS: LucideIcon[] = [MonitorSmartphone, MapPin, BarChart3]
const SOLUTION_PILLAR_ICONS: LucideIcon[] = [MonitorSmartphone, MapPin, BarChart3]
const SOLUTION_FEATURE_ICONS: LucideIcon[] = [Search, MessageCircleQuestion, Sparkles]
const ABOUT_ICONS: LucideIcon[] = [Handshake, SearchCheck, MapPin]
const SEARCH_CHANNELS: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Google', Icon: Search },
  { label: 'Redes sociais', Icon: Share2 },
  { label: 'Inteligência Artificial', Icon: Sparkles },
]

const EASE = [0.22, 1, 0.36, 1] as const

/** Última palavra em accent — mesmo padrão About/Projects/Experience. */
function gradientTitle(text: string): ReactNode {
  const words = text.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return text
  if (words.length === 1) return <span className="text-gradient">{words[0]}</span>
  const accent = words[words.length - 1]!
  const lead = words.slice(0, -1).join(' ')
  return (
    <>
      <span className="text-gradient-static">{lead} </span>
      <span className="text-gradient">{accent}</span>
    </>
  )
}

const itemTitleClass = 'font-display text-base font-bold text-ink sm:text-lg'
const itemBodyClass = 'text-[1.07rem] leading-relaxed text-ink-dim sm:text-lg'
const sectionBodyClass =
  'max-w-[72ch] text-pretty text-[1.125rem] leading-8 text-ink-dim sm:text-[1.25rem] sm:leading-8'

export function ProposalHero({ proposal }: { proposal: Proposal }) {
  return (
    <section className="section pt-32 sm:pt-36">
      <div className="container-1200 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="proposal-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {proposal.heroEyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="section-title-display mt-6 max-w-4xl !text-center sm:max-w-5xl"
        >
          {proposal.heroTitleAccent ? (
            <>
              <span className="text-gradient-static">{proposal.heroTitle} </span>
              <span className="text-gradient">{proposal.heroTitleAccent}</span>
            </>
          ) : (
            gradientTitle(proposal.heroTitle)
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-5 max-w-3xl text-pretty font-display text-base font-semibold leading-relaxed text-ink sm:text-lg sm:leading-8"
        >
          {proposal.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
          className="proposal-card mt-8 flex items-center justify-center gap-5 rounded-2xl px-5 py-4 sm:gap-12 sm:px-8"
        >
          <div className="shrink-0 text-center sm:text-left">
            <p className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-ink-mute sm:tracking-[0.28em]">
              Cliente
            </p>
            <p className="mt-1 whitespace-nowrap font-display text-sm font-bold text-ink">{proposal.clientLabel}</p>
          </div>
          <span className="h-10 w-px shrink-0 bg-slate-200 dark:bg-line/40" aria-hidden />
          <div className="shrink-0 text-center sm:text-left">
            <p className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-ink-mute sm:tracking-[0.28em]">
              Preparado por
            </p>
            <p className="mt-1 whitespace-nowrap font-display text-sm font-bold text-ink">{proposal.preparedBy}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export function ProposalAbout({ proposal }: { proposal: Proposal }) {
  const aboutParagraphs = proposal.aboutText
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <section id="sobre" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[244px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[268px_minmax(0,1fr)]">
          <div data-reveal className="lg:col-start-2">
            <SectionTitle
              eyebrow={proposal.aboutEyebrow}
              title={gradientTitle(proposal.aboutTitle)}
              denseMobile
            />
          </div>

          <div data-reveal className="-mt-5 flex justify-center lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:mt-0 lg:justify-start lg:pt-16">
            <figure
              className="proposal-card group relative w-56 shrink-0 overflow-hidden rounded-full p-2.5 transition-all duration-300 hover:border-accent/40 sm:w-64 lg:w-full"
              data-cursor="hover"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-bg-card ring-1 ring-slate-200/60 dark:ring-white/10">
                <img
                  src={PROFILE_IMAGE_PATH}
                  alt={proposal.aboutTitle}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          <div data-reveal className="lg:col-start-2">
            <div className="-mt-4 space-y-3.5 text-pretty">
              {aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={
                    idx === 0
                      ? 'font-display text-lg font-medium leading-relaxed text-ink sm:text-xl'
                      : 'text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {proposal.aboutHighlights.length > 0 && (
          <div data-reveal className="mt-12 border-t border-slate-200/80 pt-8 dark:border-line/50">
            <p className="font-mono text-[16px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-ink-dim sm:text-[17px]">
              Como eu trabalho
            </p>
            <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {proposal.aboutHighlights.map((item, i) => {
                const Icon = ABOUT_ICONS[i] ?? Sparkles
                return (
                  <li key={item.title} className="proposal-card proposal-card-hover flex flex-col justify-between rounded-2xl p-5 shadow-xs transition-all sm:p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-blue-100/70 text-accent shadow-2xs dark:border-accent/30 dark:from-accent/20 dark:to-accent/5 dark:text-accent-neon">
                          <Icon size={18} strokeWidth={2.2} />
                        </div>
                        <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-dim sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  )
}

/** Typewriter isolado: digita, segura, apaga e repete. Único ponto de re-render contínuo da seção. */
const SearchTypewriter = memo(function SearchTypewriter({ text }: { text: string }) {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLength(text.length)
      return
    }
    let current = 0
    let deleting = false
    let timer = 0
    const step = () => {
      if (!deleting) {
        current += 1
        if (current >= text.length) deleting = true
        timer = window.setTimeout(step, current >= text.length ? 2400 : 55)
      } else {
        current -= 1
        if (current <= 0) deleting = false
        timer = window.setTimeout(step, current <= 0 ? 600 : 26)
      }
      setLength(current)
    }
    timer = window.setTimeout(step, 500)
    return () => window.clearTimeout(timer)
  }, [text])

  return (
    <>
      {text.slice(0, length)}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse rounded-full bg-accent"
      />
    </>
  )
})

export function ProposalTransform({ proposal }: { proposal: Proposal }) {
  const { transform } = proposal
  const marqueeItems = [...transform.pillars, ...transform.pillars]

  return (
    <section id="transformacao" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div data-reveal>
          <SectionTitle
            eyebrow={transform.eyebrow}
            title={gradientTitle(transform.title)}
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div className="min-w-0">
            <div data-reveal className="space-y-4">
              {transform.lead.map((paragraph, idx) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={
                    idx === 0
                      ? 'font-display text-lg font-medium leading-relaxed text-ink sm:text-xl'
                      : 'text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div data-reveal className="proposal-card mt-8 rounded-2xl p-5 sm:p-7 shadow-sm">
              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-600 dark:text-ink-dim sm:text-[10px] sm:font-bold sm:tracking-[0.22em] sm:text-slate-500 sm:dark:text-ink-mute">
                {transform.searchLabel}
              </p>
              <div className="proposal-chip mt-3 flex min-h-[58px] sm:min-h-0 items-center gap-3 rounded-2xl sm:rounded-full px-4 py-3 transition-all dark:border-line/60 dark:bg-bg">
                <Search size={16} strokeWidth={2.2} className="shrink-0 text-slate-400 dark:text-ink-mute" aria-hidden />
                <span className="min-w-0 flex-1 font-mono text-xs text-ink whitespace-normal sm:whitespace-nowrap sm:text-sm">
                  <SearchTypewriter text={transform.searchQuery} />
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SEARCH_CHANNELS.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="proposal-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold dark:border-line/50 dark:bg-bg dark:text-ink-dim"
                  >
                    <Icon size={12} strokeWidth={2.2} className="text-accent" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="mt-10">
              <p className="font-mono text-[13px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-ink-dim sm:text-sm">
                {transform.journeyIntro}
              </p>
              <ol data-stagger className="mt-5 border-l border-slate-200 dark:border-line/60">
                {transform.journey.map((step, i) => {
                  const isLast = i === transform.journey.length - 1
                  return (
                    <li key={step} className="relative pb-4 pl-6 last:pb-0 sm:pb-5">
                      <span
                        aria-hidden
                        className={`absolute -left-[5px] top-[9px] h-2.5 w-2.5 rounded-full ${
                          isLast ? 'bg-accent shadow-[0_0_0_4px_rgba(219,234,254,0.9)] dark:shadow-[0_0_0_4px_rgb(var(--bg))]' : 'bg-slate-300 dark:bg-ink/20'
                        }`}
                      />
                      <div className="flex items-baseline gap-3">
                        <span className="shrink-0 whitespace-nowrap break-normal text-left font-mono text-[11px] font-black tabular-nums tracking-wider text-slate-400 dark:text-ink-mute">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={
                            isLast
                              ? 'min-w-0 text-left break-normal font-display text-base font-bold text-accent sm:text-lg'
                              : 'min-w-0 text-left break-normal font-display text-base font-semibold text-ink sm:text-lg'
                          }
                        >
                          {step}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>

          <div className="min-w-0 lg:pt-1">
            <blockquote data-reveal className="border-l-3 border-accent pl-5 sm:pl-7">
              <p className="text-pretty text-center font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-left sm:text-2xl">
                {transform.quote}
              </p>
            </blockquote>

            <div data-reveal className="mt-7 space-y-4">
              {transform.support.slice(0, 2).map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div data-reveal className="proposal-card mt-8 rounded-2xl p-5 sm:p-7 shadow-sm">
              <p className="text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]">
                {transform.support[2]}
              </p>
              <ul data-stagger className="mt-5 space-y-3">
                {transform.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200/60 bg-blue-50 text-accent dark:border-accent/30 dark:bg-accent/10 dark:text-accent"
                      aria-hidden
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="proposal-card mt-8 rounded-2xl border border-slate-200/90 p-5 shadow-2xs dark:border-line/50 sm:p-6">
              <span className="proposal-chip inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider dark:border-accent/30 dark:bg-accent/10">
                {transform.objectiveTitle}
              </span>
              <p className="mt-3 max-w-[62ch] text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]">
                {transform.objectiveText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-reveal
        className="proposal-transform-marquee mt-14 border-y border-blue-200/60 bg-blue-50/30 py-4 dark:border-line/40 dark:bg-transparent sm:mt-20 sm:py-5"
      >
        <p className="sr-only">{transform.pillars.join('. ')}</p>
        <div
          aria-hidden
          className="flex w-max animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none sm:gap-12 sm:pr-12"
        >
          {marqueeItems.map((pillar, i) => (
            <span key={`${pillar}-${i}`} className="flex items-center gap-8 sm:gap-12">
              <span className="proposal-transform-marquee__text whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.22em] text-slate-600 dark:text-ink-mute sm:text-base">
                {pillar}
              </span>
              <Sparkles
                size={13}
                className="proposal-transform-marquee__icon shrink-0 text-accent"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProposalOpportunity({ proposal }: { proposal: Proposal }) {
  const { opportunity } = proposal

  return (
    <section className="section">
      <div className="container-1200 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <div data-reveal>
              <SectionTitle
                eyebrow={opportunity.eyebrow}
                title={gradientTitle(opportunity.title)}
                denseMobile
              />
            </div>
            <div data-reveal className="-mt-4 space-y-4">
              {opportunity.body.map((paragraph, idx) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={
                    idx === 0
                      ? 'font-display text-lg font-medium leading-relaxed text-ink sm:text-xl'
                      : 'text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.125rem]'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div data-reveal className="min-w-0 lg:mt-12">
            <div className="proposal-card proposal-card-hover relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/30 to-white p-6 shadow-sm dark:border-accent/30 dark:bg-none sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-[80px]"
                aria-hidden
              />
              <div className="relative">
                <div className="icon-tile h-12 w-12 shadow-xs">
                  <TrendingUp size={20} strokeWidth={2.1} />
                </div>
                <p className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.75rem]">
                  <span className="text-gradient-static">{opportunity.kickerLead} </span>
                  <span className="text-gradient">{opportunity.kickerAccent}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type SimulatorMode = 'SEO' | 'AEO' | 'GEO'

interface SearchSimulation {
  mode: SimulatorMode
  tabTitle: string
  engineTag: string
  badgeText: string
  searchQuery: string
  queryContext: string
  resultTitle: string
  canonicalUrl: string
  summary: string
  highlights: string[]
  quoteBox?: {
    label: string
    text: string
  }
  sources?: string[]
}

const SIMULATIONS: Record<SimulatorMode, SearchSimulation> = {
  SEO: {
    mode: 'SEO',
    tabTitle: 'Google Busca (SEO)',
    engineTag: 'Google Search · Busca Orgânica em Itajubá',
    badgeText: '1º Lugar na Busca Orgânica',
    searchQuery: 'tratamento para bruxismo em Itajubá',
    queryContext: 'Paciente de Itajubá pesquisa no Google:',
    resultTitle: 'Dra. Janaína Carvalho | Tratamento de Bruxismo e DTM em Itajubá',
    canonicalUrl: 'https://drajanaínacarvalho.com.br › tratamentos › bruxismo',
    summary:
      'Atendimento odontológico especializado no diagnóstico e controle do bruxismo, dores na mandíbula e DTM em Itajubá. Consultório estruturado, placas miorrelaxantes personalizadas e plano de cuidado individualizado.',
    highlights: ['Consultório em Itajubá - MG', 'Avaliações 5.0 estrelas', 'Contato direto via WhatsApp'],
  },
  AEO: {
    mode: 'AEO',
    tabTitle: 'Resposta Direta (AEO)',
    engineTag: 'Google AI Overview / Snippet em Destaque',
    badgeText: 'Resposta Direta Recomendada',
    searchQuery: 'O que fazer ao acordar com dor na mandíbula e dentes doloridos?',
    queryContext: 'Paciente faz uma pergunta clínica direta:',
    resultTitle: 'Visão Geral com Resposta Clínica Estruturada',
    canonicalUrl: 'https://drajanaínacarvalho.com.br › duvidas-frequentes › dor-mandibula',
    summary:
      'Dores na mandíbula ao acordar costumam indicar episódios de bruxismo noturno ou disfunção temporomandibular (DTM). A recomendação médica é realizar avaliação clínica com especialista para diagnóstico da articulação e confecção de placa de proteção.',
    quoteBox: {
      label: 'Especialista Recomendada em Itajubá',
      text: 'Dra. Janaína Carvalho oferece avaliação clínica para alívio da dor orofacial e proteção dos dentes contra desgastes severos.',
    },
    highlights: ['Resposta rápida indexada', 'Conteúdo clínico validado', 'Canal de agendamento imediato'],
  },
  GEO: {
    mode: 'GEO',
    tabTitle: 'Assistentes de IA (GEO)',
    engineTag: 'ChatGPT / Perplexity / Copilot Search',
    badgeText: 'Citada como Referência',
    searchQuery: 'Qual dentista você recomenda para tratar bruxismo em Itajubá?',
    queryContext: 'Paciente consulta um assistente de inteligência artificial:',
    resultTitle: 'Síntese Generativa de Recomendação Profissional',
    canonicalUrl: 'Base de conhecimento treinada e conectada à web',
    summary:
      'Em Itajubá, a Dra. Janaína Carvalho é amplamente recomendada para tratamentos de bruxismo, apertamento dental e dor orofacial. Seu consultório possui estrutura moderna e avaliações que comprovam atendimento humanizado e seguro.',
    sources: [
      'drajanaínacarvalho.com.br (Site Oficial)',
      'Google Meu Negócio (Itajubá - MG)',
      'Artigos e Especialidades Clínicas Verificadas',
    ],
    highlights: ['Citada diretamente pela IA', 'Autoridade semântica validada', 'Link de destino nos resultados'],
  },
}

function SearchSimulatorResult({ sim }: { sim: SearchSimulation }) {
  switch (sim.mode) {
    case 'SEO':
      return (
        <div className="space-y-4 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-5 shadow-xs dark:border-line/60 dark:bg-bg-soft/50 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200/60 bg-blue-100 font-mono text-xs font-bold text-accent shadow-2xs dark:bg-accent/15">
                J
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-ink-mute sm:text-[13px]">
                {sim.canonicalUrl}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Check size={11} strokeWidth={3} />
              {sim.badgeText}
            </span>
          </div>

          <div>
            <h4 className="font-display text-base font-bold leading-snug text-accent hover:underline sm:text-lg">
              {sim.resultTitle}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim sm:text-[0.95rem]">{sim.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {sim.highlights.map((h) => (
              <span
                key={h}
                className="proposal-chip inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium dark:border-line/50 dark:bg-bg dark:text-ink-dim"
              >
                <Star size={11} className="text-amber-500" />
                {h}
              </span>
            ))}
          </div>
        </div>
      )
    case 'AEO':
      return (
        <div className="space-y-4 rounded-2xl border border-sky-200/90 bg-gradient-to-b from-sky-50/40 via-white to-white p-5 shadow-xs dark:border-accent/40 dark:bg-accent/[0.04] sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-accent sm:text-sm">
              <Sparkles size={15} strokeWidth={2.4} />
              Visão Geral do Google · Resposta Direta
            </span>
            <span className="rounded-full border border-sky-500/30 bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:bg-sky-500/10 dark:text-sky-400">
              {sim.badgeText}
            </span>
          </div>

          <div className="rounded-xl border border-sky-200/70 bg-white/90 p-4 shadow-2xs dark:border-accent/25 dark:bg-bg/80">
            <p className="text-sm font-medium leading-relaxed text-ink sm:text-[0.95rem]">{sim.summary}</p>
          </div>

          {sim.quoteBox ? (
            <div className="rounded-xl border border-sky-200/70 bg-sky-50/40 p-3.5 shadow-2xs dark:border-line/60 dark:bg-bg sm:p-4">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                {sim.quoteBox.label}
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-ink sm:text-base">
                {sim.quoteBox.text}
              </p>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-ink-mute">
                Fonte oficial: drajanaínacarvalho.com.br
              </p>
            </div>
          ) : null}
        </div>
      )
    case 'GEO':
      return (
        <div className="space-y-4 rounded-2xl border border-purple-200/90 bg-gradient-to-b from-purple-50/40 via-white to-white p-5 shadow-xs dark:border-purple-500/30 dark:bg-purple-500/[0.03] sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 sm:text-sm">
              <Bot size={16} strokeWidth={2.4} />
              Resposta Sintetizada por Inteligência Artificial
            </span>
            <span className="rounded-full border border-purple-500/30 bg-purple-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:bg-purple-500/10 dark:text-purple-400">
              {sim.badgeText}
            </span>
          </div>

          <div className="rounded-xl border border-purple-200/70 bg-white/90 p-4 shadow-2xs dark:border-line/60 dark:bg-bg sm:p-5">
            <p className="text-sm leading-relaxed text-ink sm:text-[0.98rem]">{sim.summary}</p>

            {sim.sources ? (
              <div className="mt-4 border-t border-slate-200/80 pt-3 dark:border-line/50">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-ink-mute">
                  Fontes indexadas pela IA:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {sim.sources.map((s, idx) => (
                    <li key={s} className="flex items-start gap-1.5 font-mono text-xs font-semibold text-accent">
                      <span className="shrink-0 text-slate-400 dark:text-ink-mute">[{idx + 1}]</span>
                      <span className="min-w-0 break-words leading-snug">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      )
    default: {
      const _exhaustive: never = sim.mode
      return _exhaustive
    }
  }
}

function SearchSimulatorEngine({
  activeMode,
  onSelectMode,
  isPaused,
  onPauseChange,
}: {
  activeMode: SimulatorMode
  onSelectMode: (mode: SimulatorMode) => void
  isPaused: boolean
  onPauseChange: (paused: boolean) => void
}) {
  const modes: SimulatorMode[] = ['SEO', 'AEO', 'GEO']

  return (
    <div
      className="proposal-card relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,1)] transition-colors duration-200 dark:border-blue-400/25 dark:bg-bg sm:p-7"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocus={() => onPauseChange(true)}
      onBlur={() => onPauseChange(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-line/60">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-2xs" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-2xs" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-2xs" aria-hidden />
          <span className="relative ml-2 grid min-w-0 flex-1">
            {modes.map((mode) => {
              const isActive = mode === activeMode
              return (
                <span
                  key={mode}
                  className={`col-start-1 row-start-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-opacity duration-200 dark:text-ink-mute ${
                    isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={!isActive}
                >
                  {SIMULATIONS[mode].engineTag}
                </span>
              )
            })}
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full proposal-chip p-1 dark:border-line/50 dark:bg-bg-soft/70">
          {modes.map((m) => {
            const isActive = m === activeMode
            return (
              <button
                key={m}
                type="button"
                onClick={() => onSelectMode(m)}
                className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-accent text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/70 hover:text-ink dark:text-ink-dim dark:hover:bg-accent/10 dark:hover:text-ink'
                }`}
                aria-pressed={isActive}
              >
                {m}
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative mt-5 grid">
        {modes.map((mode) => {
          const panel = SIMULATIONS[mode]
          const isActive = mode === activeMode
          return (
            <div
              key={mode}
              className={`col-start-1 row-start-1 transition-opacity duration-200 ${
                isActive ? 'z-[1] opacity-100' : 'pointer-events-none z-0 opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                {panel.queryContext}
              </p>
              <div className="mt-2.5 flex items-center gap-3 rounded-xl border border-blue-200/90 bg-blue-50/50 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] dark:border-accent/30 dark:bg-bg-soft/90">
                {mode === 'GEO' ? (
                  <Bot
                    size={17}
                    strokeWidth={2.2}
                    className="shrink-0 text-purple-600 dark:text-accent"
                    aria-hidden
                  />
                ) : mode === 'AEO' ? (
                  <MessageCircleQuestion
                    size={17}
                    strokeWidth={2.2}
                    className="shrink-0 text-sky-600 dark:text-accent"
                    aria-hidden
                  />
                ) : (
                  <Search size={17} strokeWidth={2.2} className="shrink-0 text-accent" aria-hidden />
                )}
                <span className="min-w-0 flex-1 overflow-hidden font-mono text-xs font-semibold text-slate-800 dark:text-ink sm:text-sm">
                  "{panel.searchQuery}"
                </span>
                <span className="hidden rounded-md border border-blue-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent shadow-2xs dark:border-transparent dark:bg-accent/15 sm:inline-block">
                  Simulação
                </span>
              </div>
              <div className="mt-6">
                <SearchSimulatorResult sim={panel} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 pt-3 font-mono text-[11px] text-slate-500 dark:border-line/50 dark:text-ink-mute">
        <span>{isPaused ? '⏸ Simulação pausada pelo usuário' : '▶ Ciclo automático ativo (6s)'}</span>
        <span className="font-bold text-accent">Dra. Janaína em destaque</span>
      </div>
    </div>
  )
}

function SolutionPillarHeader({ index, title }: { index: number; title: string }) {
  const Icon = SOLUTION_PILLAR_ICONS[index] ?? MonitorSmartphone
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <p className="shrink-0 whitespace-nowrap font-display text-3xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-5xl">
        {String(index + 1).padStart(2, '0')}
      </p>
      <div className="icon-tile h-10 w-10 shrink-0 shadow-sm sm:h-12 sm:w-12">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <h3 className="min-w-0 font-display text-xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h3>
    </div>
  )
}

function SolutionCheck({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
        aria-hidden
      >
        <Check size={12} strokeWidth={3} />
      </span>
      <span className="min-w-0 text-[15px] font-semibold leading-relaxed text-ink sm:text-base">
        {children}
      </span>
    </li>
  )
}

export function ProposalSolution({ proposal }: { proposal: Proposal }) {
  const { solution } = proposal
  const [activeSimulatorMode, setActiveSimulatorMode] = useState<SimulatorMode>('SEO')
  const [isSimulatorPaused, setIsSimulatorPaused] = useState(false)

  // Ciclo automático a cada 6.5 segundos se o usuário não estiver com foco/hover
  useEffect(() => {
    if (isSimulatorPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const modes: SimulatorMode[] = ['SEO', 'AEO', 'GEO']
    const interval = window.setInterval(() => {
      setActiveSimulatorMode((prev) => {
        const nextIdx = (modes.indexOf(prev) + 1) % modes.length
        return modes[nextIdx] ?? 'SEO'
      })
    }, 6500)

    return () => window.clearInterval(interval)
  }, [isSimulatorPaused])

  return (
    <section id="solucao" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div data-reveal>
          <SectionTitle
            eyebrow={solution.eyebrow}
            title={gradientTitle(solution.title)}
          />
        </div>

        <div className="mt-8 space-y-20 sm:space-y-24">
          {/* PILAR 01: SITE PROFISSIONAL + SIMULADOR DE BUSCA */}
          <div data-reveal className="space-y-10">
            <div className="w-full max-w-none">
              <SolutionPillarHeader index={0} title={solution.site.title} />
              <div className="mt-6 space-y-4">
                {solution.site.paragraphs.map((paragraph, idx) => {
                  const isHighlight = idx === solution.site.paragraphs.length - 1
                  return (
                    <p
                      key={paragraph.slice(0, 48)}
                      className={
                        isHighlight
                          ? 'rounded-xl border border-accent/30 bg-accent/[0.06] p-4 text-center font-display text-lg font-bold leading-relaxed text-ink sm:text-xl'
                          : 'text-[1.1rem] leading-relaxed text-ink sm:text-[1.18rem]'
                      }
                    >
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,5.2fr)_minmax(0,6.8fr)] lg:items-center lg:gap-10">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2.5 rounded-xl border border-blue-200/90 bg-blue-50/80 px-4 py-2.5 font-mono text-[13px] font-black uppercase tracking-[0.16em] text-accent shadow-xs dark:border-accent-neon/50 dark:bg-accent/15 dark:text-blue-200 sm:text-sm">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent dark:bg-blue-300" />
                  </span>
                  Clique para simular cada estratégia:
                </p>
                <div role="tablist" aria-label="Estratégias de presença digital" className="space-y-3.5">
                  {solution.site.features.map((feature, i) => {
                    const mode = (['SEO', 'AEO', 'GEO'] as SimulatorMode[])[i] ?? 'SEO'
                    const isSelected = activeSimulatorMode === mode
                    const Icon = SOLUTION_FEATURE_ICONS[i] ?? Sparkles

                    return (
                      <button
                        key={feature.label}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => {
                          setActiveSimulatorMode(mode)
                          setIsSimulatorPaused(true)
                        }}
                        className={`proposal-card w-full rounded-2xl p-5 text-left transition-all duration-200 sm:p-6 ${
                          isSelected
                            ? 'border-accent/90 ring-2 ring-accent/25 bg-blue-50/40 shadow-md dark:border-accent/80 dark:bg-accent/[0.04] dark:shadow-glow-accent'
                            : 'proposal-card-hover border-slate-200/90 hover:border-blue-300 dark:hover:border-line dark:hover:bg-bg-soft/40'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 font-mono text-base font-black tracking-widest text-accent">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200/80 bg-blue-50 dark:border-transparent dark:bg-accent/15">
                              <Icon size={16} strokeWidth={2.4} aria-hidden />
                            </div>
                            {feature.label}
                          </div>
                          <span
                            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                              isSelected
                                ? 'bg-accent text-white shadow-2xs'
                                : 'proposal-chip dark:border-line/60 dark:bg-bg dark:text-ink-mute'
                            }`}
                          >
                            {isSelected ? '● Simulação Ativa' : 'Ver Simulação'}
                          </span>
                        </div>

                        <h4 className="mt-3 font-display text-base font-bold text-ink sm:text-lg">
                          {feature.tagline}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-dim sm:text-[0.98rem]">
                          {feature.text}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="min-w-0">
                <SearchSimulatorEngine
                  activeMode={activeSimulatorMode}
                  onSelectMode={(mode) => {
                    setActiveSimulatorMode(mode)
                    setIsSimulatorPaused(true)
                  }}
                  isPaused={isSimulatorPaused}
                  onPauseChange={setIsSimulatorPaused}
                />
              </div>
            </div>
          </div>

          {/* PILAR 02: GOOGLE MAPS E AVALIAÇÕES */}
          <div
            data-reveal
            className="grid grid-cols-1 gap-10 border-t border-slate-200/80 pt-16 dark:border-line/50 sm:pt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14"
          >
            <div className="min-w-0">
              <SolutionPillarHeader index={1} title={solution.google.title} />
              <p className="mt-6 text-[1.1rem] leading-relaxed text-ink sm:text-[1.18rem]">
                {solution.google.intro}
              </p>

              <div className="proposal-card mt-8 rounded-3xl border border-slate-200/90 p-5 shadow-xs dark:border-line/60 dark:bg-bg sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <ShieldCheck size={12} strokeWidth={2.4} />
                      Perfil Verificado Google
                    </span>
                    <h4 className="mt-2.5 font-display text-lg font-bold text-ink sm:text-xl">
                      Dra. Janaína Carvalho · Consultório
                    </h4>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="shrink-0 whitespace-nowrap font-mono text-sm font-black text-amber-500">5.0</span>
                      <div className="flex shrink-0 text-amber-500" aria-label="5 de 5 estrelas">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} size={14} className="fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="font-mono text-xs text-slate-500 dark:text-ink-mute">(Avaliações reais de Itajubá)</span>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-blue-100/70 text-accent shadow-xs dark:border-transparent dark:bg-accent/12">
                    <MapPin size={20} strokeWidth={2.2} />
                  </div>
                </div>

                <p className="mt-5 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-4 font-display text-[15px] font-semibold leading-relaxed text-ink dark:border-accent/25 dark:bg-accent/8">
                  {solution.google.goal}
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-ink-mute">
                O que está incluído no fortalecimento:
              </p>
              <div className="proposal-card mt-3 rounded-3xl border border-slate-200/90 p-5 shadow-xs dark:border-line/60 sm:p-7">
                <ul data-stagger className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {solution.google.bullets.map((bullet) => (
                    <SolutionCheck key={bullet}>{bullet}</SolutionCheck>
                  ))}
                </ul>

                <div className="mt-7 flex items-start gap-4 rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 to-white p-5 shadow-xs dark:border-accent/40 dark:bg-accent/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                    <QrCode size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-accent">
                      Diferencial Exclusivo
                    </span>
                    <p className="mt-0.5 font-display text-base font-bold text-ink sm:text-lg">
                      {solution.google.qrHighlight}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-ink-dim sm:text-sm">
                      Placa física com acabamento no balcão da recepção: o paciente aponta a câmera do celular e avalia em menos de 30 segundos ao terminar a consulta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILAR 03: ACOMPANHAMENTO E EVOLUÇÃO MENSAL */}
          <div data-reveal className="border-t border-slate-200/80 pt-16 dark:border-line/50 sm:pt-20">
            <div className="max-w-3xl">
              <SolutionPillarHeader index={2} title={solution.monthly.title} />
              <div className="mt-6 space-y-4">
                {solution.monthly.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[1.1rem] leading-relaxed text-ink sm:text-[1.18rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* CADEIA DE MÉTRICAS */}
            <div className="proposal-card mt-8 rounded-3xl border border-slate-200/90 p-5 shadow-xs dark:border-line/60 dark:bg-bg-soft/40 sm:p-7">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Funil de entendimento do paciente:
              </p>
              <ol data-stagger className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                {solution.monthly.funnel.map((step, i) => {
                  const isLast = i === solution.monthly.funnel.length - 1
                  return (
                    <li key={step} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3 w-full sm:w-auto">
                      {i > 0 && (
                        <ArrowRight
                          size={14}
                          strokeWidth={2.5}
                          className="shrink-0 text-accent rotate-90 sm:rotate-0"
                          aria-hidden
                        />
                      )}
                      <span
                        className={
                          isLast
                            ? 'inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl bg-accent px-4 py-2 font-mono text-xs font-bold text-white shadow-sm sm:text-sm text-center'
                            : 'proposal-chip inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-semibold dark:border-line/70 dark:bg-bg dark:text-ink sm:text-sm text-center'
                        }
                      >
                        <span className="opacity-70">{String(i + 1).padStart(2, '0')}.</span>
                        <span>{step}</span>
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* FERRAMENTAS UTILIZADAS */}
            <div data-reveal className="mt-8 flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-start gap-x-4 gap-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-ink-mute">
                {solution.monthly.toolsNote}:
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                {solution.monthly.tools.map((tool) => (
                  <span
                    key={tool}
                    className="proposal-chip inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs font-bold transition-colors hover:border-accent/40 dark:border-line/70 dark:bg-white/[0.04] dark:text-ink"
                  >
                    <BarChart3 size={12} className="text-accent" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* MELHORIAS CONTÍNUAS */}
            <div data-reveal className="mt-12">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-ink-mute">
                {solution.monthly.improvementsIntro}
              </p>
              <ul data-stagger className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {solution.monthly.improvements.map((item) => (
                  <SolutionCheck key={item}>{item}</SolutionCheck>
                ))}
              </ul>
            </div>

            {/* FECHO HEROICO */}
            <div data-reveal className="proposal-card mt-14 rounded-3xl border-2 border-blue-200/80 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-6 shadow-sm dark:border-accent/30 dark:bg-accent/[0.04] sm:p-10">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                {solution.monthly.closingLead}
              </p>
              <p className="mt-4 max-w-4xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                <span className="text-ink-mute line-through decoration-accent/60 decoration-2">
                  {solution.monthly.closingMuted}
                </span>{' '}
                <span className="text-gradient">{solution.monthly.closingAccent}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProposalDeliverables({ proposal }: { proposal: Proposal }) {
  const { deliverables } = proposal

  return (
    <section id="escopo" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div data-reveal>
          <SectionTitle
            eyebrow={deliverables.eyebrow}
            title={gradientTitle(deliverables.title)}
          />
        </div>

        <div className="mt-8 space-y-8 sm:space-y-10">
          {/* MÓDULO 01 — SITE PROFISSIONAL COMPLETO (SHOWCASE HERO CARD) */}
          <div data-reveal className="proposal-card relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
              aria-hidden
            />

            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-line/50">
                <div className="flex items-center gap-3 sm:gap-5">
                  <p className="shrink-0 whitespace-nowrap font-display text-3xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-5xl">
                    {deliverables.site.number}
                  </p>
                  <div className="icon-tile h-10 w-10 shrink-0 shadow-sm sm:h-12 sm:w-12">
                    <MonitorSmartphone size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                      {deliverables.site.badge}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-3xl">
                      {deliverables.site.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {deliverables.site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="proposal-chip rounded-full px-3 py-1 font-mono text-xs font-semibold dark:border-line/60 dark:bg-white/[0.04] dark:text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul data-stagger className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {deliverables.site.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-200/70 bg-blue-50 text-accent dark:border-transparent dark:bg-accent/15 dark:text-accent"
                      aria-hidden
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-display text-sm font-semibold leading-relaxed text-ink sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OBS — DOMÍNIO DO SITE */}
          <aside
            data-reveal
            className="proposal-card relative overflow-hidden rounded-3xl border border-dashed border-accent-warm/50 bg-gradient-to-b from-amber-50/40 via-white to-white p-6 shadow-sm dark:border-accent-warm/35 dark:from-accent-warm/[0.06] dark:via-bg dark:to-bg sm:p-8"
          >
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-warm/15 text-accent-warm dark:bg-accent-warm/20">
                    <Globe size={20} strokeWidth={2.2} aria-hidden />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent-warm">
                      {deliverables.domainNote.label}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {deliverables.domainNote.title}
                    </h3>
                    <p className="mt-1 font-display text-base font-semibold text-ink-dim sm:text-lg">
                      {deliverables.domainNote.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className={`mt-6 ${sectionBodyClass} max-w-[68ch]`}>
                {deliverables.domainNote.lead}
              </p>

              <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-ink-mute">
                {deliverables.domainNote.exampleLabel}
              </p>
              <p className="mt-2 font-display text-lg sm:text-3xl font-bold tracking-tight text-accent break-all">
                {deliverables.domainNote.exampleDomain}
              </p>
              <p className={`mt-3 ${sectionBodyClass} max-w-[68ch]`}>
                {deliverables.domainNote.exampleNote}
              </p>

              <div className="mt-6 space-y-3">
                <p className={`${sectionBodyClass} max-w-[68ch]`}>
                  {deliverables.domainNote.registerNote}
                </p>
                <p className="font-display text-base font-bold text-ink sm:text-lg">
                  {deliverables.domainNote.helpNote}
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xs dark:border-line/60 dark:bg-bg-soft/40 sm:p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  {deliverables.domainNote.pricingTitle}
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {deliverables.domainNote.pricing.map((row) => (
                    <li
                      key={row.period}
                      className="proposal-card rounded-2xl border border-slate-200/90 bg-white/90 p-3.5 text-center shadow-2xs dark:border-line/60 dark:bg-bg-soft/40 sm:p-5"
                    >
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-ink-mute">
                        {row.period}
                      </p>
                      <p className="mt-1 font-display text-base font-bold tabular-nums text-ink sm:text-xl">
                        {row.price}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-dim">
                  {deliverables.domainNote.paymentNote}
                </p>
                <p className="mt-3 font-display text-base font-bold text-ink sm:text-lg">
                  {deliverables.domainNote.disclaimer}
                </p>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-dim">
                  {deliverables.domainNote.renewalNote}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200/80 bg-blue-50/50 p-5 dark:border-accent/25 dark:bg-accent/8 sm:p-6">
                <p className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {deliverables.domainNote.ownershipTitle}
                </p>
                <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-dim sm:text-[1.1rem]">
                  {deliverables.domainNote.ownershipBody}
                </p>
              </div>
            </div>
          </aside>

          {/* MÓDULOS 02 & 03 — GOOGLE & ANALYTICS (GRID EQUILIBRADO) */}
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* 02 — GOOGLE E PRESENÇA LOCAL */}
            <div data-reveal className="proposal-card flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5 dark:border-line/50">
                  <div className="flex items-center gap-3">
                    <p className="shrink-0 whitespace-nowrap font-display text-3xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-4xl">
                      {deliverables.google.number}
                    </p>
                    <div className="icon-tile h-9 w-9 shrink-0 shadow-sm sm:h-10 sm:w-10">
                      <MapPin size={18} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-ink">
                      {deliverables.google.title}
                    </h3>
                  </div>
                  <span className="proposal-chip self-start sm:self-auto rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider dark:border-accent/30 dark:bg-accent/10">
                    {deliverables.google.badge}
                  </span>
                </div>

                <ul data-stagger className="mt-6 space-y-3.5">
                  {deliverables.google.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-200/70 bg-blue-50 text-accent dark:border-transparent dark:bg-accent/15 dark:text-accent"
                        aria-hidden
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-display text-sm font-semibold leading-relaxed text-ink sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-start gap-3.5 rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 to-white p-4 shadow-xs dark:border-accent/30 dark:bg-accent/8 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                  <QrCode size={20} strokeWidth={2.4} />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-accent">
                    Destaque Físico
                  </span>
                  <p className="mt-0.5 font-display text-sm font-bold text-ink sm:text-base">
                    {deliverables.google.qrHighlight}
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — ESTRUTURA DE ANÁLISE E ACOMPANHAMENTO */}
            <div data-reveal className="proposal-card flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5 dark:border-line/50">
                  <div className="flex items-center gap-3">
                    <p className="shrink-0 whitespace-nowrap font-display text-3xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-4xl">
                      {deliverables.analytics.number}
                    </p>
                    <div className="icon-tile h-9 w-9 shrink-0 shadow-sm sm:h-10 sm:w-10">
                      <BarChart3 size={18} strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-ink">
                      {deliverables.analytics.title}
                    </h3>
                  </div>
                  <span className="proposal-chip self-start sm:self-auto rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider dark:border-line/70 dark:bg-bg-soft/70 dark:text-ink-mute">
                    {deliverables.analytics.badge}
                  </span>
                </div>

                <ul data-stagger className="mt-6 space-y-3.5">
                  {deliverables.analytics.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-200/70 bg-blue-50 text-accent dark:border-transparent dark:bg-accent/15 dark:text-accent"
                        aria-hidden
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-display text-sm font-semibold leading-relaxed text-ink sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-5 dark:border-line/50">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-ink-mute">
                  Ferramentas Integradas:
                </span>
                {deliverables.analytics.tools.map((tool) => (
                  <span
                    key={tool}
                    className="proposal-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold transition-colors hover:border-accent/40 dark:border-line/60 dark:bg-white/[0.04] dark:text-ink-dim"
                  >
                    <BarChart3 size={11} className="text-accent" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MÓDULO 04 — EVOLUÇÃO CONTÍNUA (ENGINE CARD) */}
          <div data-reveal className="proposal-card relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-10">
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
              aria-hidden
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-line/50">
                <div className="flex items-center gap-4 sm:gap-5">
                  <p className="shrink-0 whitespace-nowrap font-display text-4xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-5xl">
                    {deliverables.evolution.number}
                  </p>
                  <div className="icon-tile h-12 w-12 shrink-0 shadow-sm">
                    <RefreshCw size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                      {deliverables.evolution.badge}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-3xl">
                      {deliverables.evolution.title}
                    </h3>
                  </div>
                </div>

                <span className="proposal-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-xs font-bold dark:border-accent/30 dark:bg-accent/10">
                  <RefreshCw size={13} />
                  Ciclo de Decisões Baseado em Dados
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-[1.1rem] leading-relaxed text-ink sm:text-[1.18rem]">
                {deliverables.evolution.lead}
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-2xs dark:border-line/60 dark:bg-bg-soft/40 sm:p-7">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Ciclo de melhoria contínua:
                </p>
                <ol data-stagger className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5">
                  {deliverables.evolution.cycle.map((step, i) => {
                    const isLast = i === deliverables.evolution.cycle.length - 1
                    return (
                      <li key={step} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3.5 w-full sm:w-auto">
                        {i > 0 && (
                          <ArrowRight
                            size={14}
                            strokeWidth={2.5}
                            className="shrink-0 text-accent rotate-90 sm:rotate-0"
                            aria-hidden
                          />
                        )}
                        <span
                          className={
                            isLast
                              ? 'inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl bg-accent px-4 py-2 font-mono text-xs font-bold text-white shadow-sm sm:text-sm text-center'
                              : 'proposal-chip inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-semibold dark:border-line/70 dark:bg-bg dark:text-ink sm:text-sm text-center'
                          }
                        >
                          <span className="opacity-70">{String(i + 1).padStart(2, '0')}.</span>
                          <span>{step}</span>
                        </span>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="mt-8 rounded-2xl border border-blue-200/80 bg-blue-50/50 p-5 shadow-2xs dark:border-accent/25 dark:bg-accent/8 sm:p-6">
                <p className="font-display text-lg font-bold leading-relaxed text-ink sm:text-xl">
                  {deliverables.evolution.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const PROCESS_STEP_ICONS: LucideIcon[] = [
  Compass,
  ClipboardList,
  Layers,
  Code2,
  SearchCheck,
  Rocket,
]

export function ProposalProcess({ proposal }: { proposal: Proposal }) {
  const { process } = proposal

  return (
    <section id="processo" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div data-reveal>
          <SectionTitle
            eyebrow={process.eyebrow}
            title={gradientTitle(process.title)}
            description={process.lead}
            descriptionClassName="max-w-3xl text-ink"
          />
        </div>

        {/* LINHA DO TEMPO VERTICAL COM TRILHO LUMINOSO */}
        <div data-reveal className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          {/* TRILHO VERTICAL (LINHA DA TIMELINE) */}
          <span
            className="pointer-events-none absolute bottom-8 left-[1.35rem] top-8 w-0.5 bg-gradient-to-b from-accent via-accent/30 to-accent/10 sm:left-[2.1rem]"
            aria-hidden
          />

          <ol data-stagger className="relative space-y-6 sm:space-y-8">
            {process.steps.map((step, i) => {
              const Icon = PROCESS_STEP_ICONS[i] ?? ClipboardList

              return (
                <li key={step.number} className="relative flex items-start gap-4 sm:gap-6">
                  {/* NÓ DA LINHA DO TEMPO */}
                  <span
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-white shadow-md shadow-blue-500/10 ring-1 ring-slate-200/90 dark:border-accent/40 dark:bg-bg dark:ring-0 sm:h-16 sm:w-16"
                    aria-hidden
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white shadow-sm sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
                    </span>
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-blue-200 bg-white font-mono text-[10px] font-black text-accent shadow-2xs dark:border-accent/40 dark:bg-bg sm:h-6 sm:w-6 sm:text-xs">
                      {step.number}
                    </span>
                  </span>

                  {/* CARTÃO DA ETAPA */}
                  <div className="proposal-card proposal-card-hover min-w-0 flex-1 rounded-3xl p-5 shadow-sm sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200/80 pb-4 dark:border-line/50">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <span className="shrink-0 font-mono text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
                          Etapa {step.number}
                        </span>
                        <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-accent/40" />
                        <h3 className="w-full sm:w-auto font-display text-base font-bold tracking-tight text-ink sm:text-2xl">
                          {step.title}
                        </h3>
                      </div>

                      <span className="proposal-chip self-start sm:self-auto inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-2xs dark:border-accent/30 dark:bg-accent/10 dark:text-accent sm:text-xs">
                        {step.day}
                      </span>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-ink sm:text-base">
                      {step.description}
                    </p>

                    {/* ITENS DETALHADOS (ETAPA 02: MATERIAIS) */}
                    {step.items && step.items.length > 0 && (
                      <div className="mt-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 shadow-2xs dark:border-line/60 dark:bg-bg-soft/40 sm:p-5">
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                          Itens e materiais necessários:
                        </p>
                        <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="proposal-chip flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium dark:border-line/60 dark:bg-white/[0.04] dark:text-ink sm:text-[13px]"
                            >
                              <Check
                                size={13}
                                strokeWidth={2.8}
                                className="shrink-0 text-accent"
                                aria-hidden
                              />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* NOTA DE SUPORTE */}
                    {step.note && (
                      <div className="mt-3.5 rounded-xl border border-blue-200/80 bg-blue-50/50 p-3.5 text-xs leading-relaxed text-ink shadow-2xs dark:border-accent/25 dark:bg-accent/[0.05] sm:text-[13px]">
                        <span className="font-bold text-accent">Observação: </span>
                        {step.note}
                      </div>
                    )}

                    {/* PILLS EXCLUSIVAS DE DESENVOLVIMENTO */}
                    {step.number === '04' && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-2">
                        {['100% Responsivo', 'SEO · AEO · GEO', 'Google Maps', 'Botões de Contato'].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="proposal-chip rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium dark:border-line/60 dark:bg-white/[0.04] dark:text-ink-dim"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* CARD HEROICO DE CRONOGRAMA E COMPROMISSO DE PRAZO */}
        <div data-reveal className="proposal-card relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border-2 border-blue-200/80 bg-gradient-to-br from-white via-blue-50/30 to-white p-6 shadow-sm dark:border-accent/30 dark:bg-bg sm:mt-16 sm:p-10">
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/15 blur-[100px]"
            aria-hidden
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-5 dark:border-line/50">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Fluxo Linear do Projeto
              </span>
              <span className="proposal-chip rounded-full px-3 py-1 font-mono text-xs font-bold dark:border-accent/30 dark:bg-accent/10">
                7 Dias de Execução
              </span>
            </div>

            {/* FLUXO PASSO A PASSO COM SETAS */}
            <ol className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              {process.scheduleSummary.flow.map((step, i) => {
                const isLast = i === process.scheduleSummary.flow.length - 1

                return (
                  <li key={step} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3 w-full sm:w-auto">
                    {i > 0 && (
                      <ArrowRight
                        size={13}
                        strokeWidth={2.5}
                        className="shrink-0 text-accent rotate-90 sm:rotate-0"
                        aria-hidden
                      />
                    )}
                    <span
                      className={
                        isLast
                          ? 'inline-flex w-full justify-center sm:w-auto items-center rounded-xl bg-accent px-3 py-1.5 font-mono text-xs font-bold text-white shadow-sm text-center'
                          : 'proposal-chip inline-flex w-full justify-center sm:w-auto items-center rounded-xl px-2.5 py-1.5 font-mono text-xs font-medium dark:border-line/70 dark:bg-bg dark:text-ink text-center'
                      }
                    >
                      {step}
                    </span>
                  </li>
                )
              })}
            </ol>

            {/* DESTAQUE PRINCIPAL */}
            <div className="mt-8 text-center">
              <h4 className="font-display text-2xl font-bold tracking-tight text-ink text-center sm:text-3xl">
                {process.scheduleSummary.highlight}
              </h4>
              <p className="mt-2 text-xl font-bold tracking-tight text-gradient text-center sm:text-2xl">
                {process.scheduleSummary.subhighlight}
              </p>
            </div>

            {/* NOTA DE TRANSPARÊNCIA */}
            <p className="mt-6 border-t border-slate-200/80 pt-4 text-xs italic text-slate-500 dark:border-line/50 dark:text-ink-mute sm:text-sm">
              *{process.scheduleSummary.disclaimer}*
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function parseBrlAmount(value: string): number {
  return Number(value.replace(/\D/g, ''))
}

function formatBrlAmount(amount: number): string {
  return `R$ ${amount.toLocaleString('pt-BR')}`
}

function splitBrlDisplay(value: string): { currency: string; amount: string } {
  const match = value.match(/^(R\$)\s*(.+)$/)
  if (!match?.[1] || !match[2]) return { currency: '', amount: value }
  return { currency: match[1], amount: match[2] }
}

function offerDiscount(from: string, to: string) {
  const original = parseBrlAmount(from)
  const current = parseBrlAmount(to)
  if (!original || current >= original) return null
  return {
    percent: Math.round(((original - current) / original) * 100),
    saved: original - current,
  }
}

function ProposalOfferPrice({
  from,
  to,
  size,
}: {
  from: string
  to: string
  size: 'lg' | 'md'
}) {
  const discount = offerDiscount(from, to)
  const toParts = splitBrlDisplay(to.replace(/\s*\/mês/i, ''))
  const monthly = /\/mês/i.test(from) || /\/mês/i.test(to)
  const fromSize = size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
  const toSize = size === 'lg' ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-4xl'
  const currencySize = size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
  const badgeSize =
    size === 'lg'
      ? 'px-2.5 py-1 text-sm sm:text-base'
      : 'px-2 py-0.5 text-xs sm:text-sm'

  return (
    <div className={size === 'lg' ? 'mt-3' : 'mt-4'}>
      <p className="sr-only">
        De {from} por {to}
        {discount
          ? `, ${discount.percent}% de desconto, economia de ${formatBrlAmount(discount.saved)}${monthly ? ' por mês' : ''}`
          : ''}
      </p>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1" aria-hidden>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-ink-mute">
          De
        </span>
        <del
          className={`font-display font-bold tabular-nums text-slate-400 decoration-slate-400/90 decoration-2 dark:text-ink-mute dark:decoration-ink-mute/70 ${fromSize}`}
        >
          {from}
        </del>
      </p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-2" aria-hidden>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
          Por
        </span>
        {toParts.currency ? (
          <span className={`font-display font-bold text-accent ${currencySize}`}>
            {toParts.currency}
          </span>
        ) : null}
        <span
          className={`font-display font-bold tabular-nums tracking-tight text-ink ${toSize}`}
        >
          {toParts.amount}
        </span>
        {monthly ? (
          <span className="font-display text-base font-semibold text-slate-500 dark:text-ink-mute sm:text-lg">
            /mês
          </span>
        ) : null}
        {discount ? (
          <span
            className={`inline-flex items-center rounded-full bg-emerald-600 font-display font-bold tabular-nums tracking-tight text-white shadow-sm dark:bg-emerald-500 ${badgeSize}`}
          >
            −{discount.percent}%
          </span>
        ) : null}
      </p>
      {discount ? (
        <p className="mt-2 font-display text-sm font-bold text-emerald-700 dark:text-emerald-400 sm:text-base">
          Economia de {formatBrlAmount(discount.saved)}
          {monthly ? '/mês' : ''}
        </p>
      ) : null}
    </div>
  )
}

export function ProposalPricing({ proposal }: { proposal: Proposal }) {
  const { pricing } = proposal

  return (
    <section id="investimento" className="section scroll-mt-28">
      <div className="container-1200 relative z-10">
        <div data-reveal>
          <SectionTitle
            eyebrow={pricing.eyebrow}
            title={gradientTitle(pricing.title)}
          />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal className="space-y-5">
            {pricing.lead.map((paragraph) => (
              <p key={paragraph} className={`${sectionBodyClass} mx-auto`}>
                {paragraph}
              </p>
            ))}
          </div>

          <p
            data-reveal
            className="mt-8 rounded-2xl border border-blue-200/90 bg-gradient-to-r from-blue-50/70 to-blue-50/30 p-5 font-display text-lg font-bold leading-relaxed text-ink shadow-xs dark:border-accent/25 dark:bg-accent/[0.06] sm:p-6 sm:text-xl"
          >
            {pricing.kicker}
          </p>
        </div>

        <ol
          data-reveal
          className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6"
        >
          {pricing.modules.map((mod, i) => {
            const Icon = PRICING_MODULE_ICONS[i] ?? MonitorSmartphone
            const { currency, amount } = splitBrlDisplay(mod.price)
            return (
              <li
                key={mod.number}
                className="proposal-card proposal-card-hover flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-5xl font-bold leading-none tracking-tight text-accent dark:text-accent-neon dark:drop-shadow-[0_0_14px_rgba(96,165,250,0.45)] sm:text-6xl">
                    {mod.number}
                  </p>
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm"
                    aria-hidden
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {mod.title}
                </h3>
                <p className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-ink sm:text-[1.12rem]">
                  {mod.description}
                </p>

                <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5 border-t border-slate-200/80 pt-5 dark:border-line/60">
                  {currency ? (
                    <span className="font-display text-lg font-bold text-slate-400 dark:text-ink-mute sm:text-xl">
                      {currency}
                    </span>
                  ) : null}
                  <span className="font-display text-3xl font-bold tabular-nums tracking-tight text-ink sm:text-4xl">
                    {amount}
                  </span>
                  {mod.cadence ? (
                    <span className="font-display text-lg font-semibold text-slate-500 dark:text-ink-mute sm:text-xl">
                      {mod.cadence}
                    </span>
                  ) : null}
                </p>
              </li>
            )
          })}
        </ol>

        {/* CONDIÇÃO ESPECIAL — lockup editorial, não badge "mais popular" */}
        <div
          data-reveal
          className="proposal-card relative mt-14 overflow-hidden rounded-3xl border-2 border-accent/40 bg-gradient-to-b from-white via-white to-blue-50/40 p-6 shadow-[0_12px_36px_-8px_rgba(30,64,175,0.12),inset_0_1px_0_0_rgba(255,255,255,1)] dark:border-accent/30 dark:bg-bg dark:shadow-soft sm:mt-16 sm:p-10"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/12 blur-[100px]"
            aria-hidden
          />
          <div className="relative">
            <p className="font-mono text-[16px] font-black uppercase tracking-[0.22em] text-accent dark:text-accent-neon">
              {pricing.special.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {pricing.special.title}
            </h3>
            <p className="mt-2 font-display text-base font-semibold text-ink-dim sm:text-lg">
              {pricing.special.comboLabel}
            </p>

            <div className="mt-8 grid gap-8 border-t border-slate-200/80 pt-8 dark:border-line/50 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
              <div>
                <p className="font-mono text-[13px] font-black uppercase tracking-[0.18em] text-slate-700 dark:text-ink-dim sm:text-sm">
                  Estrutura completa
                </p>
                <ProposalOfferPrice
                  from={pricing.special.setupFrom}
                  to={pricing.special.setupTo}
                  size="lg"
                />
              </div>

              <div className="rounded-2xl border border-blue-200/90 bg-white/95 p-5 shadow-xs dark:border-line/60 dark:bg-bg-soft/50 sm:p-6">
                <p className="text-[15px] leading-relaxed text-ink sm:text-base">
                  {pricing.special.monthlyLead}
                </p>
                <ProposalOfferPrice
                  from={pricing.special.monthlyFrom}
                  to={pricing.special.monthlyTo}
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARTA PESSOAL */}
        <div
          data-reveal
          className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14"
        >
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {pricing.why.title}
            </h3>
            <div className="mt-6 space-y-5">
              {pricing.why.body.map((paragraph) => (
                <p key={paragraph} className={`${sectionBodyClass} max-w-[68ch]`}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 space-y-5">
              {pricing.why.close.map((paragraph) => (
                <p key={paragraph} className={`${sectionBodyClass} max-w-[68ch]`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
            <blockquote className="proposal-card rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-line/70 dark:bg-bg sm:p-8">
              <Quote size={22} strokeWidth={2.2} className="text-accent" aria-hidden />
              <p className="mt-4 font-display text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
                {pricing.why.quote}
              </p>
            </blockquote>
            <ul className="space-y-3">
              {pricing.why.guarantees.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200/70 bg-blue-50 text-accent dark:border-transparent dark:bg-accent/15 dark:text-accent"
                    aria-hidden
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-display text-base font-bold text-ink sm:text-lg">{line}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function ProposalCTA({
  proposal,
  whatsappHref,
}: {
  proposal: Proposal
  whatsappHref: string
}) {
  return (
    <section id="contato" className="section scroll-mt-28" data-reveal>
      <div className="container-1200 relative z-10">
        <div className="proposal-card relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-blue-200/80 bg-gradient-to-br from-white via-blue-50/25 to-white p-8 shadow-[0_12px_40px_-8px_rgba(30,64,175,0.08),inset_0_1px_0_0_rgba(255,255,255,1)] dark:border-white/10 dark:bg-bg-soft sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute -top-28 left-0 h-[280px] w-[420px] rounded-full bg-accent/10 blur-[110px] dark:bg-accent/20" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-[240px] w-[380px] rounded-full bg-accent-cyan/8 blur-[110px] dark:bg-accent-cyan/14" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-30" />

          <div
            className={`relative grid gap-10 ${proposal.nextSteps.length > 0 ? 'lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14' : ''}`}
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="eyebrow-rule" aria-hidden />
                <span className="heading-eyebrow">Próximo passo</span>
              </div>
              <h2 className="section-title-display mt-4 max-w-2xl">
                {gradientTitle(proposal.ctaTitle)}
              </h2>
              <p className={`mt-4 max-w-xl whitespace-pre-line ${sectionBodyClass}`}>
                {proposal.ctaDescription}
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary proposal-cta-whatsapp relative z-10 inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold sm:text-base"
                  data-cursor="hover"
                >
                  <span aria-hidden className="floating-whatsapp__glow" />
                  <WhatsAppIcon size={18} className="relative z-[2]" />
                  <span className="relative z-[2]">{proposal.ctaPrimaryLabel}</span>
                </a>
              </div>
            </div>

            {proposal.nextSteps.length > 0 ? (
              <ol className="divide-y divide-slate-200/80 border-y border-slate-200/80 dark:divide-line dark:border-line">
                {proposal.nextSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 py-4">
                    <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-sm font-bold text-ink sm:text-base">
                      {step.replace(/^\d+\s*[·.•\-]\s*/, '')}
                    </span>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProposalFooter({ clientLabel }: { clientLabel: string }) {
  const year = new Date().getFullYear()

  return (
    <footer data-reveal className="relative z-10 pb-12 pt-4 sm:pb-14">
      <div className="container-1200">
        <div className="flex flex-col items-center gap-8 border-t-[3px] border-blue-400 pt-10 dark:border-t dark:border-white/10">
          <Logo className="h-14 w-auto opacity-90 sm:h-16" alt="Mateus Bonette" />
          <div className="max-w-lg space-y-2 text-center">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-ink-dim">
              Proposta preparada para{' '}
              <span className="font-semibold text-ink">{clientLabel}</span>.
            </p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-ink-mute">
              Documento confidencial — uso exclusivo do destinatário.
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400 dark:text-ink-mute">
            © {year} Mateus Bonette
          </p>
        </div>
      </div>
    </footer>
  )
}
