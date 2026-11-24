import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  ArrowUpDown,
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Coins,
  Cpu,
  Database,
  Eye,
  FileCheck2,
  FileCode2,
  FileSearch,
  Flame,
  FlaskConical,
  Gauge,
  GitBranch,
  GitCompare,
  Globe,
  Globe2,
  Layers,
  LayoutTemplate,
  Lock,
  Maximize2,
  Route,
  ScanText,
  Scissors,
  Search,
  SearchCode,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  TextSearch,
  UserCheck,
  Wand2,
  Webhook,
  Workflow,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react'
import {
  siAngular,
  siAnthropic,
  siCelery,
  siClaude,
  siCloudflare,
  siCrewai,
  siCss,
  siCursor,
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
  siOpenrouter,
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
  siUbuntu,
  siWhatsapp,
  type SimpleIcon,
} from 'simple-icons'
import { SectionTitle } from './SectionTitle'
import { UI } from '../data/portfolio'
import { useReducedMotion } from '../hooks/useReducedMotion'

type BrandIcon = { type: 'brand'; icon: SimpleIcon }
type LineIcon = { type: 'line'; icon: LucideIcon }
type CustomSvgIcon = {
  type: 'custom'
  viewBox?: string
  paths: Array<{ d: string; fill?: string; stroke?: string; strokeWidth?: number }>
}
type SkillVisual = { color: string; icon: BrandIcon | LineIcon | CustomSvgIcon }

const OPENAI_BLOOM_PATH =
  'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'

const FEATURED_GROUP_IDS = new Set(['ai-engineering', 'rag-prompting', 'harness-engineering'])

const GROUP_ICONS: Record<string, LucideIcon> = {
  'ai-engineering': BrainCircuit,
  'rag-prompting': SearchCode,
  'harness-engineering': ShieldCheck,
  backend: Database,
  frontend: LayoutTemplate,
  cloud: Cloud,
  data: Activity,
  product: Layers,
}

const SKILL_VISUALS: Record<string, SkillVisual> = {
  // 1. AI Engineering: Modelos, Agentes & Coding
  'applied-ai': { color: '#1e40af', icon: { type: 'line', icon: Cpu } },
  llms: { color: '#2563eb', icon: { type: 'line', icon: BrainCircuit } },
  anthropic: { color: '#d97757', icon: { type: 'brand', icon: siClaude } },
  'claude-code': { color: '#c25938', icon: { type: 'brand', icon: siAnthropic } },
  openai: {
    color: '#10a37f',
    icon: { type: 'custom', paths: [{ d: OPENAI_BLOOM_PATH }] },
  },
  codex: {
    color: '#0f172a',
    icon: {
      type: 'custom',
      paths: [
        {
          d: 'M12 2.25 20.25 7v10L12 21.75 3.75 17V7L12 2.25Z',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.9,
        },
        {
          d: 'M8.5 9.5 11.25 12 8.5 14.5M12.5 14.5h3',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
        },
      ],
    },
  },
  gemini: { color: '#4285f4', icon: { type: 'brand', icon: siGooglegemini } },
  antigravity: {
    color: '#2563eb',
    icon: {
      type: 'custom',
      paths: [
        {
          d: 'M12 3.2c1.1 0 1.95.72 2.55 2.05l5.1 11.4c.56 1.25-.28 2.65-1.6 2.65-.86 0-1.56-.5-2.02-1.26-1.08-1.76-2.4-2.84-4.03-2.84s-2.95 1.08-4.03 2.84c-.46.76-1.16 1.26-2.02 1.26-1.32 0-2.16-1.4-1.6-2.65l5.1-11.4C10.05 3.92 10.9 3.2 12 3.2Zm0 4.65L9.35 13.7c.82-.38 1.7-.58 2.65-.58s1.83.2 2.65.58L12 7.85Z',
        },
      ],
    },
  },
  cursor: { color: '#0f172a', icon: { type: 'brand', icon: siCursor } },
  grok: {
    color: '#0f172a',
    icon: {
      type: 'custom',
      paths: [
        {
          d: 'M18.36 5.64a9 9 0 1 0 1.97 9.85',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2.2,
        },
        {
          d: 'M20.5 3.5 9.2 14.8',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2.3,
        },
        {
          d: 'M12.5 12h7.2v6.2',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2.1,
        },
      ],
    },
  },
  openrouter: { color: '#6366f1', icon: { type: 'brand', icon: siOpenrouter } },
  ollama: { color: '#1e293b', icon: { type: 'brand', icon: siOllama } },
  'vertex-ai': { color: '#2563eb', icon: { type: 'brand', icon: siGooglecloud } },
  huggingface: { color: '#ca8a04', icon: { type: 'brand', icon: siHuggingface } },
  'ai-agents': { color: '#1d4ed8', icon: { type: 'line', icon: Bot } },
  'browser-agents': { color: '#2563eb', icon: { type: 'line', icon: Globe } },
  langchain: { color: '#16a34a', icon: { type: 'brand', icon: siLangchain } },
  langgraph: { color: '#1c3c3c', icon: { type: 'brand', icon: siLanggraph } },
  'crewai-adk': { color: '#ea580c', icon: { type: 'brand', icon: siCrewai } },
  'finetuning-lora': { color: '#4f46e5', icon: { type: 'line', icon: SlidersHorizontal } },
  'model-optimization': { color: '#7c3aed', icon: { type: 'line', icon: Gauge } },
  'model-routing': { color: '#0284c7', icon: { type: 'line', icon: Route } },

  // 2. RAG, Busca, Prompting & Contexto
  rag: { color: '#0891b2', icon: { type: 'line', icon: SearchCode } },
  'contextual-retrieval': { color: '#0284c7', icon: { type: 'line', icon: FileSearch } },
  bm25: { color: '#0369a1', icon: { type: 'line', icon: TextSearch } },
  reranking: { color: '#0e7490', icon: { type: 'line', icon: ArrowUpDown } },
  'text-chunking': { color: '#0891b2', icon: { type: 'line', icon: Scissors } },
  embeddings: { color: '#4f46e5', icon: { type: 'line', icon: Layers } },
  'vector-databases': { color: '#4338ca', icon: { type: 'line', icon: Database } },
  'multimodal-ocr': { color: '#0284c7', icon: { type: 'line', icon: ScanText } },
  firecrawl: { color: '#ff4c00', icon: { type: 'line', icon: Flame } },
  'prompt-engineering': { color: '#7c3aed', icon: { type: 'line', icon: Terminal } },
  'system-prompt-design': { color: '#6d28d9', icon: { type: 'line', icon: FileCode2 } },
  'prompt-optimization': { color: '#7c3aed', icon: { type: 'line', icon: Wand2 } },
  textgrad: { color: '#9333ea', icon: { type: 'line', icon: GitBranch } },
  'token-management': { color: '#0284c7', icon: { type: 'line', icon: Binary } },
  'context-window': { color: '#4f46e5', icon: { type: 'line', icon: Maximize2 } },

  // 3. Harness Engineering: Confiabilidade e Controle
  'harness-arch': { color: '#0f766e', icon: { type: 'line', icon: ShieldCheck } },
  'agent-harness': { color: '#0d9488', icon: { type: 'line', icon: Shield } },
  mcp: { color: '#0f172a', icon: { type: 'brand', icon: siModelcontextprotocol } },
  skills: { color: '#4f46e5', icon: { type: 'line', icon: Blocks } },
  hooks: { color: '#0d9488', icon: { type: 'line', icon: Webhook } },
  guardrails: { color: '#0d9488', icon: { type: 'line', icon: ShieldCheck } },
  'context-engineering': { color: '#4f46e5', icon: { type: 'line', icon: Sparkles } },
  hitl: { color: '#2563eb', icon: { type: 'line', icon: UserCheck } },
  hotl: { color: '#1d4ed8', icon: { type: 'line', icon: Eye } },
  'tool-calling': { color: '#0284c7', icon: { type: 'line', icon: Wrench } },
  'deterministic-rules': { color: '#1d4ed8', icon: { type: 'line', icon: GitCompare } },
  langfuse: { color: '#2563eb', icon: { type: 'line', icon: Activity } },
  'cost-fallback': { color: '#ca8a04', icon: { type: 'line', icon: Coins } },
  'ai-evals': { color: '#16a34a', icon: { type: 'line', icon: FlaskConical } },
  'parameterized-sql-ai': { color: '#4169e1', icon: { type: 'line', icon: Database } },
  'sdd-ai': { color: '#0f766e', icon: { type: 'line', icon: FileCheck2 } },
  'responsible-ai': { color: '#334155', icon: { type: 'line', icon: Lock } },

  // 4. Backend, APIs e Bancos
  python: { color: '#3776ab', icon: { type: 'brand', icon: siPython } },
  fastapi: { color: '#009688', icon: { type: 'brand', icon: siFastapi } },
  nodejs: { color: '#4d8a3f', icon: { type: 'brand', icon: siNodedotjs } },
  express: { color: '#334155', icon: { type: 'brand', icon: siExpress } },
  django: { color: '#0c4b33', icon: { type: 'brand', icon: siDjango } },
  sqlalchemy: { color: '#d71f00', icon: { type: 'brand', icon: siSqlalchemy } },
  celery: { color: '#37814a', icon: { type: 'brand', icon: siCelery } },
  graphql: { color: '#e10098', icon: { type: 'brand', icon: siGraphql } },
  'rest-apis': { color: '#0f766e', icon: { type: 'line', icon: Globe2 } },
  postgresql: { color: '#4169e1', icon: { type: 'brand', icon: siPostgresql } },
  pgvector: { color: '#2563eb', icon: { type: 'brand', icon: siPostgresql } },
  redis: { color: '#dc2626', icon: { type: 'brand', icon: siRedis } },
  mysql: { color: '#4479a1', icon: { type: 'brand', icon: siMysql } },
  'playwright-scraping': { color: '#16a34a', icon: { type: 'line', icon: Terminal } },

  // 5. Frontend e Mobile
  typescript: { color: '#3178c6', icon: { type: 'brand', icon: siTypescript } },
  javascript: { color: '#b48a14', icon: { type: 'brand', icon: siJavascript } },
  react: { color: '#0e8fb8', icon: { type: 'brand', icon: siReact } },
  nextjs: { color: '#0f172a', icon: { type: 'brand', icon: siNextdotjs } },
  angular: { color: '#c3002f', icon: { type: 'brand', icon: siAngular } },
  tailwindcss: { color: '#0891b2', icon: { type: 'brand', icon: siTailwindcss } },
  html: { color: '#e34f26', icon: { type: 'brand', icon: siHtml5 } },
  css: { color: '#1572b6', icon: { type: 'brand', icon: siCss } },
  flutter: { color: '#02569b', icon: { type: 'brand', icon: siFlutter } },
  dart: { color: '#0175c2', icon: { type: 'brand', icon: siDart } },

  // 6. Cloud, DevOps e Qualidade
  docker: { color: '#2496ed', icon: { type: 'brand', icon: siDocker } },
  gcp: { color: '#2563eb', icon: { type: 'brand', icon: siGooglecloud } },
  aws: { color: '#d97706', icon: { type: 'line', icon: Cloud } },
  cloudflare: { color: '#ea580c', icon: { type: 'brand', icon: siCloudflare } },
  'github-actions': { color: '#2088ff', icon: { type: 'brand', icon: siGithubactions } },
  kubernetes: { color: '#326ce5', icon: { type: 'brand', icon: siKubernetes } },
  terraform: { color: '#7c3aed', icon: { type: 'brand', icon: siTerraform } },
  linux: { color: '#ca8a04', icon: { type: 'brand', icon: siLinux } },
  ubuntu: { color: '#e95420', icon: { type: 'brand', icon: siUbuntu } },
  git: { color: '#f05032', icon: { type: 'brand', icon: siGit } },
  'github-gitlab': { color: '#1e293b', icon: { type: 'brand', icon: siGithub } },
  pytest: { color: '#0284c7', icon: { type: 'brand', icon: siPytest } },

  // 7. Dados e Visualização
  pandas: { color: '#1e1b4b', icon: { type: 'brand', icon: siPandas } },
  streamlit: { color: '#e11d48', icon: { type: 'brand', icon: siStreamlit } },
  'data-modeling': { color: '#334155', icon: { type: 'line', icon: Database } },
  matplotlib: { color: '#11557c', icon: { type: 'line', icon: Activity } },
  seaborn: { color: '#4f46e5', icon: { type: 'line', icon: Activity } },

  // 8. Produto, Integrações e Processo
  figma: { color: '#f24e1e', icon: { type: 'brand', icon: siFigma } },
  'ux-ui': { color: '#7c3aed', icon: { type: 'line', icon: LayoutTemplate } },
  'whatsapp-api': { color: '#16a34a', icon: { type: 'brand', icon: siWhatsapp } },
  mercadopago: { color: '#0284c7', icon: { type: 'brand', icon: siMercadopago } },
  n8n: { color: '#ea4b71', icon: { type: 'brand', icon: siN8n } },
  hubspot: { color: '#ea580c', icon: { type: 'brand', icon: siHubspot } },
  scrum: { color: '#334155', icon: { type: 'line', icon: Workflow } },
}

const DEFAULT_VISUAL: SkillVisual = {
  color: '#1e40af',
  icon: { type: 'line', icon: Code2 },
}

const SPRING_TAB = {
  type: 'spring' as const,
  stiffness: 430,
  damping: 34,
  mass: 0.75,
}

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

function SkillSvg({ visual, size = 16 }: { visual: SkillVisual; size?: number }) {
  if (visual.icon.type === 'brand') {
    return (
      <svg
        aria-hidden
        width={size}
        height={size}
        className="shrink-0"
        role="img"
        viewBox="0 0 24 24"
      >
        <path d={visual.icon.icon.path} fill={visual.color} />
      </svg>
    )
  }

  if (visual.icon.type === 'custom') {
    return (
      <svg
        aria-hidden
        width={size}
        height={size}
        className="shrink-0"
        role="img"
        viewBox={visual.icon.viewBox ?? '0 0 24 24'}
        style={{ color: visual.color }}
      >
        {visual.icon.paths.map((p, idx) => (
          <path
            key={idx}
            d={p.d}
            fill={p.fill ?? 'currentColor'}
            stroke={p.stroke}
            strokeWidth={p.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    )
  }

  return (
    <visual.icon.icon
      aria-hidden
      width={size}
      height={size}
      className="shrink-0"
      color={visual.color}
      strokeWidth={2.1}
    />
  )
}

export function Skills() {
  const reduced = useReducedMotion()
  const groups = UI.skills.groups
  const isPt = UI.skills.itemsLabel === 'itens'

  const [selectedGroupId, setSelectedGroupId] = useState<string>(
    groups[0]?.id ?? 'ai-engineering',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSkillKey, setActiveSkillKey] = useState<string>(() => {
    const firstGroup = groups[0]
    const firstItem = firstGroup?.items[0]
    return firstGroup && firstItem ? `${firstGroup.id}:${firstItem.id}` : ''
  })

  const featuredGroups = useMemo(
    () => groups.filter((g) => FEATURED_GROUP_IDS.has(g.id)),
    [groups],
  )
  const otherGroups = useMemo(
    () => groups.filter((g) => !FEATURED_GROUP_IDS.has(g.id)),
    [groups],
  )

  const allItems = useMemo(
    () =>
      groups.flatMap((group) =>
        group.items.map((item) => ({
          ...item,
          key: `${group.id}:${item.id}`,
          groupId: group.id,
          groupTitle: group.title,
        })),
      ),
    [groups],
  )

  const totalItems = allItems.length
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const isSearching = normalizedQuery.length > 0
  const isAllSelected = selectedGroupId === 'all'
  const activeGroup = groups.find((g) => g.id === selectedGroupId) ?? groups[0]

  const displayedItems = useMemo(() => {
    if (isSearching) {
      return allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.groupTitle.toLowerCase().includes(normalizedQuery),
      )
    }
    if (isAllSelected) return allItems
    return allItems.filter((item) => item.groupId === activeGroup.id)
  }, [allItems, activeGroup.id, isAllSelected, isSearching, normalizedQuery])

  // Mantém sempre uma tecnologia válida ativa no Painel Inspetor
  useEffect(() => {
    if (displayedItems.length === 0) return
    const exists = displayedItems.some((item) => item.key === activeSkillKey)
    if (!exists) {
      setActiveSkillKey(displayedItems[0].key)
    }
  }, [displayedItems, activeSkillKey])

  const inspectedIndex = Math.max(
    0,
    displayedItems.findIndex((item) => item.key === activeSkillKey),
  )
  const inspectedSkill = displayedItems[inspectedIndex] ?? displayedItems[0] ?? null
  const inspectedVisual = inspectedSkill
    ? SKILL_VISUALS[inspectedSkill.id] ?? DEFAULT_VISUAL
    : DEFAULT_VISUAL

  const ActiveIcon = isSearching
    ? Search
    : isAllSelected
      ? Layers
      : GROUP_ICONS[activeGroup.id] ?? LayoutTemplate
  const isFeaturedActive =
    !isSearching && !isAllSelected && FEATURED_GROUP_IDS.has(activeGroup.id)

  const handleSelectGroup = (groupId: string) => {
    setSearchQuery('')
    setSelectedGroupId(groupId)
  }

  const handleStepInspected = (delta: number) => {
    if (displayedItems.length <= 1) return
    const nextIndex =
      (inspectedIndex + delta + displayedItems.length) % displayedItems.length
    setActiveSkillKey(displayedItems[nextIndex].key)
  }

  const renderDesktopTab = (group: (typeof groups)[number], featured = false) => {
    const GroupIcon = GROUP_ICONS[group.id] ?? LayoutTemplate
    const isActive = !isSearching && selectedGroupId === group.id

    return (
      <button
        key={group.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls="skills-tabpanel"
        id={`skills-tab-${group.id}`}
        onClick={() => handleSelectGroup(group.id)}
        className={`group/tab relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
          isActive
            ? 'text-white'
            : 'text-[#1E293B] hover:bg-[#E4EDF7] hover:text-[#090E1A] dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-white'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="skills-active-pill-desktop"
            transition={reduced ? { duration: 0.01 } : SPRING_TAB}
            className="pointer-events-none absolute inset-0 rounded-xl bg-[#0F172A] shadow-[0_6px_18px_-8px_rgba(15,23,42,0.6)] dark:border dark:border-blue-400/45 dark:bg-blue-900/45 dark:shadow-[0_8px_22px_-10px_rgba(37,99,235,0.55)]"
            aria-hidden
          >
            <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-blue-400" />
          </motion.span>
        )}

        <span className="relative z-10 flex min-w-0 items-center gap-3">
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors duration-200 ${
              isActive
                ? 'border-blue-400/35 bg-blue-500/20 text-blue-200'
                : featured
                  ? 'border-[#B9CBE3] bg-[#EAF1FA] text-[#1E40AF] group-hover/tab:border-[#9EB8DA] group-hover/tab:bg-white dark:border-blue-400/25 dark:bg-blue-500/15 dark:text-blue-300'
                  : 'border-[#CFDCEB] bg-white text-[#334155] group-hover/tab:border-[#B5C6DC] group-hover/tab:text-[#0F172A] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300'
            }`}
          >
            <GroupIcon className="h-4 w-4" strokeWidth={2} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-display text-[13px] font-bold leading-[1.32] text-pretty">
              {group.title}
            </span>
          </span>
        </span>

        <span
          className={`relative z-10 shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums transition-colors ${
            isActive
              ? 'bg-white/12 text-blue-100'
              : featured
                ? 'bg-[#DCE8F8] text-[#1E40AF] group-hover/tab:bg-white group-hover/tab:text-[#0F172A] dark:bg-blue-500/15 dark:text-blue-200'
                : 'bg-[#E7EFF7] text-[#475569] group-hover/tab:bg-white group-hover/tab:text-[#0F172A] dark:bg-white/[0.06] dark:text-slate-400 dark:group-hover/tab:text-slate-200'
          }`}
        >
          {String(group.items.length).padStart(2, '0')}
        </span>
      </button>
    )
  }

  const renderMobileTab = (
    id: string,
    label: string,
    count: number,
    Icon: LucideIcon,
    featured = false,
  ) => {
    const isActive = !isSearching && selectedGroupId === id

    return (
      <button
        key={id}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls="skills-tabpanel"
        onClick={() => handleSelectGroup(id)}
        className={`relative flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          isActive
            ? 'border-[#0F172A] text-white dark:border-blue-400/50'
            : featured
              ? 'border-[#B9CBE3] bg-[#EAF1FA] text-[#0F172A] hover:border-[#93B0D6] dark:border-blue-400/25 dark:bg-blue-500/10 dark:text-slate-100'
              : 'border-[#C8D6E6] bg-white text-[#1E293B] hover:border-[#9EB4CF] dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-200'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="skills-active-pill-mobile"
            transition={reduced ? { duration: 0.01 } : SPRING_TAB}
            className="pointer-events-none absolute inset-0 rounded-[11px] bg-[#0F172A] dark:bg-blue-900/55"
            aria-hidden
          />
        )}
        <Icon
          className={`relative z-10 h-4 w-4 shrink-0 ${
            isActive ? 'text-blue-300' : 'text-[#1E40AF] dark:text-blue-300'
          }`}
          strokeWidth={2}
        />
        <span className="relative z-10 whitespace-nowrap font-display text-[13px] font-bold leading-tight">
          {label}
        </span>
        <span
          className={`relative z-10 rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums ${
            isActive
              ? 'bg-white/15 text-blue-100'
              : 'bg-[#E7EFF7] text-[#334155] dark:bg-white/10 dark:text-slate-300'
          }`}
        >
          {count}
        </span>
      </button>
    )
  }

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
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="skills-workbench"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,328px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            {/* Trilho de áreas */}
            <aside className="skills-sidebar min-w-0 p-4 sm:p-5 lg:p-6">
              <div className="mb-3.5 flex items-baseline justify-between gap-3 border-b border-[#D2DEEC] pb-3 dark:border-white/10">
                <span className="text-[13px] font-semibold text-[#1E293B] dark:text-slate-200">
                  {UI.skills.filterLabel}
                </span>
                <span className="font-mono text-[11px] font-semibold tabular-nums text-[#475569] dark:text-slate-400">
                  {totalItems} {UI.skills.itemsLabel}
                </span>
              </div>

              {/* Faixa horizontal mobile */}
              <div
                role="tablist"
                aria-label={UI.skills.filterLabel}
                className="skills-mobile-strip -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
              >
                {featuredGroups.map((group) =>
                  renderMobileTab(
                    group.id,
                    group.title,
                    group.items.length,
                    GROUP_ICONS[group.id] ?? LayoutTemplate,
                    true,
                  ),
                )}
                {otherGroups.map((group) =>
                  renderMobileTab(
                    group.id,
                    group.title,
                    group.items.length,
                    GROUP_ICONS[group.id] ?? LayoutTemplate,
                    false,
                  ),
                )}
                {renderMobileTab('all', UI.skills.allLabel, totalItems, Layers, false)}
              </div>

              {/* Índice lateral desktop */}
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label={UI.skills.filterLabel}
                className="hidden lg:flex lg:flex-col lg:gap-4"
              >
                <div>
                  <p className="mb-2 px-2 text-xs font-semibold text-[#1E40AF] dark:text-blue-300">
                    {UI.skills.featuredAreasLabel}
                  </p>
                  <div className="flex flex-col gap-1">
                    {featuredGroups.map((group) => renderDesktopTab(group, true))}
                  </div>
                </div>

                <div className="border-t border-[#D2DEEC] pt-3.5 dark:border-white/10">
                  <p className="mb-2 px-2 text-xs font-semibold text-[#475569] dark:text-slate-400">
                    {UI.skills.otherAreasLabel}
                  </p>
                  <div className="flex flex-col gap-1">
                    {otherGroups.map((group) => renderDesktopTab(group, false))}
                  </div>
                </div>

                <div className="border-t border-[#D2DEEC] pt-3 dark:border-white/10">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={!isSearching && isAllSelected}
                    aria-controls="skills-tabpanel"
                    id="skills-tab-all"
                    onClick={() => handleSelectGroup('all')}
                    className={`group/tab relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                      !isSearching && isAllSelected
                        ? 'text-white'
                        : 'text-[#1E293B] hover:bg-[#E4EDF7] hover:text-[#090E1A] dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-white'
                    }`}
                  >
                    {!isSearching && isAllSelected && (
                      <motion.span
                        layoutId="skills-active-pill-desktop"
                        transition={reduced ? { duration: 0.01 } : SPRING_TAB}
                        className="pointer-events-none absolute inset-0 rounded-xl bg-[#0F172A] shadow-[0_6px_18px_-8px_rgba(15,23,42,0.6)] dark:border dark:border-blue-400/45 dark:bg-blue-900/45"
                        aria-hidden
                      >
                        <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-blue-400" />
                      </motion.span>
                    )}

                    <span className="relative z-10 flex min-w-0 items-center gap-3">
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors ${
                          !isSearching && isAllSelected
                            ? 'border-blue-400/35 bg-blue-500/20 text-blue-200'
                            : 'border-[#CFDCEB] bg-white text-[#334155] group-hover/tab:border-[#B5C6DC] group-hover/tab:text-[#0F172A] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300'
                        }`}
                      >
                        <Layers className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[13px] font-bold leading-snug">
                          {UI.skills.allLabel}
                        </span>
                        <span
                          className={`block text-[11px] font-medium ${
                            !isSearching && isAllSelected
                              ? 'text-slate-300'
                              : 'text-[#475569] dark:text-slate-400'
                          }`}
                        >
                          {groups.length} {UI.skills.areasLabel}
                        </span>
                      </span>
                    </span>

                    <span
                      className={`relative z-10 shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums ${
                        !isSearching && isAllSelected
                          ? 'bg-white/12 text-blue-100'
                          : 'bg-[#E7EFF7] text-[#475569] group-hover/tab:bg-white group-hover/tab:text-[#0F172A] dark:bg-white/[0.06] dark:text-slate-400'
                      }`}
                    >
                      {totalItems}
                    </span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Palco compacto: Cabeçalho + Inspetor Ativo + Matriz de Tiles */}
            <div
              id="skills-tabpanel"
              role="tabpanel"
              aria-labelledby={`skills-tab-${selectedGroupId}`}
              className="skills-stage flex min-w-0 flex-col gap-5 p-4 sm:p-6 lg:p-7"
            >
              {/* Cabeçalho + Busca rápida */}
              <div className="flex flex-col gap-4 border-b border-[#C5D3E5] pb-4 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3.5">
                  <motion.div
                    key={`icon-${isSearching ? 'search' : selectedGroupId}`}
                    initial={reduced ? false : { scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#1E293B] bg-[#0F172A] text-blue-300 shadow-[0_6px_14px_-6px_rgba(15,23,42,0.5)] dark:border-blue-400/35 dark:bg-blue-950/80 dark:text-blue-200"
                  >
                    <ActiveIcon size={20} strokeWidth={2} />
                  </motion.div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="break-words font-display text-lg font-bold leading-snug text-[#090E1A] dark:text-white sm:text-[1.3rem]">
                        {isSearching
                          ? isPt
                            ? `Resultados para "${searchQuery.trim()}"`
                            : `Results for "${searchQuery.trim()}"`
                          : isAllSelected
                            ? UI.skills.allLabel
                            : activeGroup.title}
                      </h3>
                      {isFeaturedActive && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#93B4E2] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#1E40AF] dark:border-blue-400/35 dark:bg-blue-500/15 dark:text-blue-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1E40AF] dark:bg-blue-300" />
                          {UI.skills.featuredBadge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 max-w-2xl text-[0.875rem] leading-relaxed text-[#334155] dark:text-slate-300">
                      {isSearching
                        ? isPt
                          ? `${displayedItems.length} de ${totalItems} tecnologias encontradas`
                          : `${displayedItems.length} of ${totalItems} technologies matched`
                        : isAllSelected
                          ? `${groups.length} ${UI.skills.areasLabel}, ${totalItems} ${UI.skills.itemsLabel}`
                          : activeGroup.summary}
                    </p>
                  </div>
                </div>

                {/* Busca instantânea + contagem */}
                <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
                  <label className="skills-search relative flex h-10 w-full items-center gap-2 rounded-xl px-3 sm:w-56">
                    <Search
                      className="h-4 w-4 shrink-0 text-[#475569] dark:text-slate-400"
                      aria-hidden
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isPt ? 'Buscar tecnologia...' : 'Search stack...'}
                      aria-label={isPt ? 'Buscar tecnologia' : 'Search technology'}
                      className="w-full min-w-0 bg-transparent text-[13px] font-medium text-[#090E1A] placeholder:text-[#64748B] focus:outline-none dark:text-white dark:placeholder:text-slate-400"
                    />
                    {isSearching && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label={isPt ? 'Limpar busca' : 'Clear search'}
                        className="grid h-6 w-6 shrink-0 cursor-pointer place-items-center rounded-md text-[#475569] hover:bg-slate-100 hover:text-[#090E1A] dark:text-slate-300 dark:hover:bg-white/10"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </label>
                </div>
              </div>

              {/* Painel Inspetor (Progressive Disclosure) */}
              {inspectedSkill ? (
                <div
                  style={{ '--tech-color': inspectedVisual.color } as CSSProperties}
                  className="skills-inspector min-h-[116px] p-4 pl-5 sm:p-5 sm:pl-6"
                >
                  <span className="skills-inspector__rail" aria-hidden />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={inspectedSkill.key}
                        initial={reduced ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                        className="flex min-w-0 items-start gap-4"
                      >
                        <div className="skills-inspector-socket">
                          <SkillSvg visual={inspectedVisual} size={24} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                            <h4 className="font-display text-base font-bold leading-snug text-[#090E1A] dark:text-white sm:text-[1.1rem]">
                              {inspectedSkill.name}
                            </h4>
                            <span className="rounded-md bg-[#EEF4FB] px-2 py-0.5 text-[11px] font-semibold text-[#334155] dark:bg-white/[0.08] dark:text-slate-300">
                              {inspectedSkill.groupTitle}
                            </span>
                          </div>
                          <p className="mt-1.5 max-w-2xl text-[0.9rem] leading-relaxed text-[#334155] dark:text-slate-300">
                            {inspectedSkill.description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navegação rápida entre itens */}
                    <div className="flex shrink-0 items-center justify-between gap-2 border-t border-[#E6EEF7] pt-3 dark:border-white/10 sm:justify-end sm:border-t-0 sm:pt-0">
                      <span className="font-mono text-xs font-semibold tabular-nums text-[#475569] dark:text-slate-400">
                        {String(inspectedIndex + 1).padStart(2, '0')} /{' '}
                        {String(displayedItems.length).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleStepInspected(-1)}
                          disabled={displayedItems.length <= 1}
                          aria-label={isPt ? 'Tecnologia anterior' : 'Previous technology'}
                          className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-[#C6D4E5] bg-[#F8FAFD] text-[#1E293B] transition-colors hover:border-[#94B0D3] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:bg-white/10"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStepInspected(1)}
                          disabled={displayedItems.length <= 1}
                          aria-label={isPt ? 'Próxima tecnologia' : 'Next technology'}
                          className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-[#C6D4E5] bg-[#F8FAFD] text-[#1E293B] transition-colors hover:border-[#94B0D3] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:bg-white/10"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="skills-inspector flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-sm font-bold text-[#090E1A] dark:text-white">
                      {isPt
                        ? 'Nenhuma tecnologia encontrada para essa busca.'
                        : 'No matching technologies found.'}
                    </p>
                    <p className="mt-0.5 text-xs text-[#475569] dark:text-slate-400">
                      {isPt
                        ? 'Tente outro termo como Claude, RAG, pgvector ou Ubuntu.'
                        : 'Try another term such as Claude, RAG, pgvector, or Ubuntu.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="cursor-pointer rounded-lg border border-[#B9C9DF] bg-[#F8FAFD] px-3 py-2 text-xs font-semibold text-[#0F172A] transition-colors hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white"
                  >
                    {isPt ? 'Limpar busca' : 'Reset search'}
                  </button>
                </div>
              )}

              {/* Matriz compacta de Tech Tiles */}
              <div>
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-[#475569] dark:text-slate-400">
                    {isPt
                      ? 'Passe o cursor ou selecione uma tecnologia para ver como aplico em produção'
                      : 'Hover or select any technology to inspect how I use it in production'}
                  </p>
                  <span className="shrink-0 font-mono text-[11px] font-semibold tabular-nums text-[#475569] dark:text-slate-400">
                    {String(displayedItems.length).padStart(2, '0')} {UI.skills.itemsLabel}
                  </span>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isSearching ? `search-${normalizedQuery}` : selectedGroupId}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {displayedItems.map((skill) => {
                      const visual = SKILL_VISUALS[skill.id] ?? DEFAULT_VISUAL
                      const isSelected = inspectedSkill?.key === skill.key

                      return (
                        <button
                          key={skill.key}
                          type="button"
                          onClick={() => setActiveSkillKey(skill.key)}
                          onPointerEnter={(e) => {
                            if (e.pointerType === 'mouse') {
                              setActiveSkillKey(skill.key)
                            }
                          }}
                          onFocus={() => setActiveSkillKey(skill.key)}
                          aria-pressed={isSelected}
                          style={{ '--tech-color': visual.color } as CSSProperties}
                          className={`skills-tile focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                            isSelected ? 'skills-tile--active' : ''
                          }`}
                          data-cursor="hover"
                        >
                          <span className="skills-tile-socket">
                            <SkillSvg visual={visual} size={16} />
                          </span>
                          <span className="font-display text-[13px] font-bold leading-tight tracking-[-0.01em]">
                            {skill.name}
                          </span>
                        </button>
                      )
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
