import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCheck2,
  Globe2,
  Layers,
  LayoutTemplate,
  ScanText,
  SearchCode,
  ShieldCheck,
  Terminal,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import {
  siAngular,
  siAnthropic,
  siCelery,
  siCloudflare,
  siCss,
  siDart,
  siDjango,
  siDocker,
  siExpress,
  siFastapi,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siGooglecloud,
  siGooglegemini,
  siGraphql,
  siHtml5,
  siHubspot,
  siHuggingface,
  siJavascript,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siLinux,
  siMercadopago,
  siModelcontextprotocol,
  siMysql,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPandas,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siRedis,
  siSqlalchemy,
  siStreamlit,
  siTailwindcss,
  siTerraform,
  siTypescript,
  siWhatsapp,
  type SimpleIcon,
} from 'simple-icons'
import { SectionTitle } from './SectionTitle'
import { UI } from '../data/portfolio'

type BrandIcon = { type: 'brand'; icon: SimpleIcon }
type LineIcon = { type: 'line'; icon: LucideIcon }
type SkillVisual = { color: string; icon: BrandIcon | LineIcon }

const GROUP_ICONS: Record<string, LucideIcon> = {
  ai: BrainCircuit,
  backend: Database,
  frontend: LayoutTemplate,
  cloud: Cloud,
  data: Activity,
  product: Layers,
}

const SKILL_VISUALS: Record<string, SkillVisual> = {
  // IA Aplicada, LLMs e Agentes
  llms: { color: '#2563eb', icon: { type: 'line', icon: BrainCircuit } },
  rag: { color: '#0891b2', icon: { type: 'line', icon: SearchCode } },
  'ai-agents': { color: '#1d4ed8', icon: { type: 'line', icon: Bot } },
  mcp: { color: '#0f172a', icon: { type: 'brand', icon: siModelcontextprotocol } },
  langchain: { color: '#16a34a', icon: { type: 'brand', icon: siLangchain } },
  langgraph: { color: '#1c3c3c', icon: { type: 'brand', icon: siLanggraph } },
  'tool-calling': { color: '#0284c7', icon: { type: 'line', icon: Wrench } },
  embeddings: { color: '#4f46e5', icon: { type: 'line', icon: Layers } },
  'harness-engineering': { color: '#0f766e', icon: { type: 'line', icon: ShieldCheck } },
  'prompt-engineering': { color: '#7c3aed', icon: { type: 'line', icon: Terminal } },
  openai: { color: '#10a37f', icon: { type: 'line', icon: Bot } },
  anthropic: { color: '#d97706', icon: { type: 'brand', icon: siAnthropic } },
  gemini: { color: '#8e75b2', icon: { type: 'brand', icon: siGooglegemini } },
  'vertex-ai': { color: '#4285f4', icon: { type: 'line', icon: Cpu } },
  ollama: { color: '#1e293b', icon: { type: 'brand', icon: siOllama } },
  huggingface: { color: '#ca8a04', icon: { type: 'brand', icon: siHuggingface } },
  langfuse: { color: '#2563eb', icon: { type: 'line', icon: Activity } },
  'guardrails-hitl': { color: '#0d9488', icon: { type: 'line', icon: ShieldCheck } },

  // Backend, APIs e Bancos
  python: { color: '#3776ab', icon: { type: 'brand', icon: siPython } },
  fastapi: { color: '#009688', icon: { type: 'brand', icon: siFastapi } },
  nodejs: { color: '#5fa04e', icon: { type: 'brand', icon: siNodedotjs } },
  express: { color: '#475569', icon: { type: 'brand', icon: siExpress } },
  django: { color: '#0c4b33', icon: { type: 'brand', icon: siDjango } },
  sqlalchemy: { color: '#d71f00', icon: { type: 'brand', icon: siSqlalchemy } },
  celery: { color: '#37814a', icon: { type: 'brand', icon: siCelery } },
  graphql: { color: '#e10098', icon: { type: 'brand', icon: siGraphql } },
  'rest-apis': { color: '#0f766e', icon: { type: 'line', icon: Globe2 } },
  postgresql: { color: '#4169e1', icon: { type: 'brand', icon: siPostgresql } },
  pgvector: { color: '#2563eb', icon: { type: 'line', icon: Database } },
  redis: { color: '#dc2626', icon: { type: 'brand', icon: siRedis } },
  mysql: { color: '#4479a1', icon: { type: 'brand', icon: siMysql } },
  'playwright-scraping': { color: '#16a34a', icon: { type: 'line', icon: Terminal } },

  // Frontend e Mobile
  typescript: { color: '#3178c6', icon: { type: 'brand', icon: siTypescript } },
  javascript: { color: '#c9a227', icon: { type: 'brand', icon: siJavascript } },
  react: { color: '#149eca', icon: { type: 'brand', icon: siReact } },
  nextjs: { color: '#0f172a', icon: { type: 'brand', icon: siNextdotjs } },
  angular: { color: '#c3002f', icon: { type: 'brand', icon: siAngular } },
  tailwindcss: { color: '#06b6d4', icon: { type: 'brand', icon: siTailwindcss } },
  html: { color: '#e34f26', icon: { type: 'brand', icon: siHtml5 } },
  css: { color: '#1572b6', icon: { type: 'brand', icon: siCss } },
  flutter: { color: '#02569b', icon: { type: 'brand', icon: siFlutter } },
  dart: { color: '#0175c2', icon: { type: 'brand', icon: siDart } },

  // Cloud, DevOps e Qualidade
  docker: { color: '#2496ed', icon: { type: 'brand', icon: siDocker } },
  gcp: { color: '#4285f4', icon: { type: 'brand', icon: siGooglecloud } },
  aws: { color: '#f59e0b', icon: { type: 'line', icon: Cloud } },
  cloudflare: { color: '#f38020', icon: { type: 'brand', icon: siCloudflare } },
  'github-actions': { color: '#2088ff', icon: { type: 'brand', icon: siGithubactions } },
  kubernetes: { color: '#326ce5', icon: { type: 'brand', icon: siKubernetes } },
  terraform: { color: '#844fba', icon: { type: 'brand', icon: siTerraform } },
  linux: { color: '#ca8a04', icon: { type: 'brand', icon: siLinux } },
  git: { color: '#f05032', icon: { type: 'brand', icon: siGit } },
  'github-gitlab': { color: '#334155', icon: { type: 'brand', icon: siGithub } },
  pytest: { color: '#0a9edc', icon: { type: 'brand', icon: siPytest } },

  // Dados, OCR e Visualização
  pandas: { color: '#1e1b4b', icon: { type: 'brand', icon: siPandas } },
  streamlit: { color: '#ff4b4b', icon: { type: 'brand', icon: siStreamlit } },
  'ocr-extraction': { color: '#0284c7', icon: { type: 'line', icon: ScanText } },
  'data-modeling': { color: '#475569', icon: { type: 'line', icon: Database } },
  matplotlib: { color: '#11557c', icon: { type: 'line', icon: Activity } },
  seaborn: { color: '#4f46e5', icon: { type: 'line', icon: Activity } },

  // Produto, Integrações e Processo
  figma: { color: '#f24e1e', icon: { type: 'brand', icon: siFigma } },
  'ux-ui': { color: '#7c3aed', icon: { type: 'line', icon: LayoutTemplate } },
  sdd: { color: '#0f766e', icon: { type: 'line', icon: FileCheck2 } },
  'whatsapp-api': { color: '#25d366', icon: { type: 'brand', icon: siWhatsapp } },
  mercadopago: { color: '#00b1ea', icon: { type: 'brand', icon: siMercadopago } },
  n8n: { color: '#ea4b71', icon: { type: 'brand', icon: siN8n } },
  hubspot: { color: '#ff7a59', icon: { type: 'brand', icon: siHubspot } },
  scrum: { color: '#475569', icon: { type: 'line', icon: Workflow } },
}

const DEFAULT_VISUAL: SkillVisual = {
  color: '#2563eb',
  icon: { type: 'line', icon: Code2 },
}

function SkillIcon({ visual }: { visual: SkillVisual }) {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white shadow-soft transition-transform duration-200 group-hover:scale-105 dark:border-white/10 dark:bg-white/95">
      {visual.icon.type === 'brand' ? (
        <svg aria-hidden className="h-5 w-5" role="img" viewBox="0 0 24 24">
          <path d={visual.icon.icon.path} fill={visual.color} />
        </svg>
      ) : (
        <visual.icon.icon
          aria-hidden
          className="h-5 w-5"
          color={visual.color}
          strokeWidth={2}
        />
      )}
    </div>
  )
}

export function Skills() {
  const groups = UI.skills.groups
  const [selectedId, setSelectedId] = useState<string>(groups[0]?.id ?? 'ai')

  const isAllSelected = selectedId === 'all'
  const activeGroup = groups.find((g) => g.id === selectedId) ?? groups[0]
  const totalItems = groups.reduce((acc, group) => acc + group.items.length, 0)
  const displayedItems = isAllSelected
    ? groups.flatMap((group) => group.items.map((item) => ({ ...item, groupTitle: group.title })))
    : activeGroup.items.map((item) => ({ ...item, groupTitle: activeGroup.title }))

  const ActiveIcon = isAllSelected ? Layers : GROUP_ICONS[activeGroup.id] ?? LayoutTemplate

  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow={UI.skills.eyebrow}
          title={`${UI.skills.titleStart}${UI.skills.titleAccent}${UI.skills.titleEnd}`}
          description={UI.skills.description}
          descriptionClassName="max-w-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="liquid-card rounded-[1.5rem] p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <aside className="min-w-0 rounded-[1.25rem] border border-slate-200 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                  {UI.skills.filterLabel}
                </span>
                <span className="font-mono text-[11px] font-semibold text-ink-mute">
                  {totalItems} {UI.skills.itemsLabel}
                </span>
              </div>

              <div
                className="flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0"
                style={{ scrollbarWidth: 'none' }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedId('all')}
                  aria-pressed={isAllSelected}
                  className={`relative flex shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/70 ${
                    isAllSelected
                      ? 'border-accent/40 bg-white text-accent-deep shadow-soft dark:border-accent-neon/40 dark:bg-white/10 dark:text-white'
                      : 'border-slate-200/70 bg-white/50 text-ink-dim hover:border-slate-300 hover:bg-white dark:border-transparent dark:bg-transparent dark:hover:border-white/10 dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <span
                    className={`h-8 w-8 shrink-0 ${
                      isAllSelected
                        ? 'icon-tile'
                        : 'grid place-items-center rounded-lg bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-accent-neon'
                    }`}
                  >
                    <Layers className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[13px] font-bold leading-tight sm:text-sm">
                      {UI.skills.allLabel}
                    </span>
                    <span className="hidden lg:block mt-0.5 font-mono text-[10px] font-semibold opacity-70">
                      {groups.length} {UI.skills.areasLabel} · {totalItems} {UI.skills.itemsLabel}
                    </span>
                  </span>
                </button>

                {groups.map((group) => {
                  const GroupIcon = GROUP_ICONS[group.id] ?? LayoutTemplate
                  const isActive = selectedId === group.id

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setSelectedId(group.id)}
                      aria-pressed={isActive}
                      className={`relative flex shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/70 ${
                        isActive
                          ? 'border-accent/40 bg-white text-accent-deep shadow-soft dark:border-accent-neon/40 dark:bg-white/10 dark:text-white'
                          : 'border-slate-200/70 bg-white/50 text-ink-dim hover:border-slate-300 hover:bg-white dark:border-transparent dark:bg-transparent dark:hover:border-white/10 dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <span
                        className={`h-8 w-8 shrink-0 ${
                          isActive
                            ? 'icon-tile'
                            : 'grid place-items-center rounded-lg bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-accent-neon'
                        }`}
                      >
                        <GroupIcon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[13px] font-bold leading-tight sm:text-sm">
                          {group.title}
                        </span>
                        <span className="hidden lg:block mt-0.5 font-mono text-[10px] font-semibold opacity-70">
                          {group.items.length} {UI.skills.itemsLabel}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </aside>

            <motion.article
              key={selectedId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-3">
                  <div className="icon-tile h-11 w-11 shrink-0">
                    <ActiveIcon size={20} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
                      {isAllSelected ? UI.skills.allLabel : activeGroup.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-dim">
                      {isAllSelected
                        ? `${groups.length} ${UI.skills.areasLabel} · ${totalItems} ${UI.skills.itemsLabel}`
                        : activeGroup.summary}
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-semibold text-ink-mute dark:border-white/10 dark:bg-white/[0.05]">
                  {String(displayedItems.length).padStart(2, '0')} {UI.skills.itemsLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {displayedItems.map((skill) => {
                  const visual = SKILL_VISUALS[skill.id] ?? DEFAULT_VISUAL
                  return (
                    <div
                      key={`${skill.groupTitle}-${skill.id}`}
                      className="group flex flex-col gap-2.5 rounded-2xl border border-slate-200/90 bg-white/75 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-accent-neon/45 dark:hover:bg-white/[0.08]"
                      data-cursor="hover"
                    >
                      <div className="flex items-center gap-3">
                        <SkillIcon visual={visual} />
                        <h4 className="min-w-0 break-words font-display text-[0.95rem] font-bold leading-snug text-ink">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs leading-relaxed text-ink-dim sm:text-[0.8125rem]">
                        {skill.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
