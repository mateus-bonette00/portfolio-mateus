import { useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  ChartNoAxesCombined,
  Database,
  Gamepad2,
  Globe2,
  LayoutTemplate,
  Presentation,
  Rows3,
  SearchCode,
  Workflow,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'
import {
  siAngular,
  siCss,
  siDart,
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siGitlab,
  siGoogledocs,
  siGooglesheets,
  siGoogleslides,
  siHtml5,
  siJavascript,
  siMysql,
  siNodedotjs,
  siObsstudio,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siStreamlit,
  siTrello,
  siTypescript,
  siUnity,
  type SimpleIcon,
} from 'simple-icons'
import { SectionTitle } from './SectionTitle'
import { UI } from '../data/portfolio'

type BrandIcon = {
  type: 'brand'
  icon: SimpleIcon
}

type LineIcon = {
  type: 'line'
  icon: LucideIcon
}

type TechSkill = {
  name: string
  description: string
  level: number
  color: string
  icon: BrandIcon | LineIcon
}

type TechGroup = {
  title: string
  summary: string
  items: TechSkill[]
}

const GROUP_ICONS: Record<string, LucideIcon> = {
  'Frontend e Mobile': LayoutTemplate,
  'Backend, APIs e Bancos': Database,
  'Dados e Visualização': ChartNoAxesCombined,
  'IA, Automação e Dev Tools': Bot,
  'Design, Produto e Conteúdo': Presentation,
  'Gestão, Jogos e Processo': Workflow,
}

const TECH_GROUPS: TechGroup[] = [
  {
    title: 'IA, Automação e Dev Tools',
    summary: 'Uso ferramentas modernas para acelerar desenvolvimento, revisar código e automatizar tarefas.',
    items: [
      {
        name: 'Docker',
        description: 'Ambientes isolados para rodar aplicações com mais previsibilidade.',
        level: 100,
        color: '#2496ed',
        icon: { type: 'brand', icon: siDocker },
      },
      {
        name: 'Git',
        description: 'Versionamento, histórico e organização do trabalho.',
        level: 100,
        color: '#f05032',
        icon: { type: 'brand', icon: siGit },
      },
      {
        name: 'GitHub',
        description: 'Repositórios, colaboração, issues e entrega de código.',
        level: 100,
        color: '#475569',
        icon: { type: 'brand', icon: siGithub },
      },
      {
        name: 'GitLab',
        description: 'Fluxo de repositórios, pipelines e organização de projeto.',
        level: 100,
        color: '#fc6d26',
        icon: { type: 'brand', icon: siGitlab },
      },
      {
        name: 'Automação com IA',
        description: 'Redução de trabalho repetitivo usando scripts, agentes e integrações.',
        level: 100,
        color: '#0f766e',
        icon: { type: 'line', icon: Bot },
      },
      {
        name: 'IA aplicada',
        description: 'Uso prático de IA para resolver fluxos reais, produtividade e operação.',
        level: 100,
        color: '#2563eb',
        icon: { type: 'line', icon: Bot },
      },
      {
        name: 'IA generativa',
        description: 'Construção de soluções com geração de texto, contexto e automação assistida.',
        level: 100,
        color: '#0ea5e9',
        icon: { type: 'line', icon: Bot },
      },
      {
        name: 'Engenharia de IA',
        description: 'Arquitetura de agentes, contexto, integração e confiabilidade em sistemas de IA.',
        level: 100,
        color: '#0f766e',
        icon: { type: 'line', icon: Workflow },
      },
      {
        name: 'LLMs',
        description: 'Orquestração de modelos de linguagem para comando, resposta e roteamento.',
        level: 100,
        color: '#ea580c',
        icon: { type: 'line', icon: Bot },
      },
      {
        name: 'RAG',
        description: 'Recuperação de contexto com busca semântica para respostas mais úteis e precisas.',
        level: 100,
        color: '#0891b2',
        icon: { type: 'line', icon: SearchCode },
      },
      {
        name: 'LangChain',
        description: 'Pipelines de IA com chunking, embeddings, recuperação e resposta contextual.',
        level: 100,
        color: '#16a34a',
        icon: { type: 'line', icon: Workflow },
      },
      {
        name: 'LangGraph',
        description: 'Fluxos com estados, nós e transições para agentes e automações mais robustas.',
        level: 100,
        color: '#ca8a04',
        icon: { type: 'line', icon: Rows3 },
      },
      {
        name: 'Embeddings',
        description: 'Vetorização de conteúdo para similaridade, contexto e busca semântica.',
        level: 100,
        color: '#1d4ed8',
        icon: { type: 'line', icon: Database },
      },
      {
        name: 'Agentes de IA',
        description: 'Criação de agentes especializados para executar tarefas e responder com contexto.',
        level: 100,
        color: '#dc2626',
        icon: { type: 'line', icon: Bot },
      },
    ],
  },
  {
    title: 'Backend, APIs e Bancos',
    summary: 'Construção de serviços, integração com dados e organização de regras de negócio.',
    items: [
      {
        name: 'Node.js',
        description: 'APIs, serviços e integrações do lado do servidor.',
        level: 100,
        color: '#5fa04e',
        icon: { type: 'brand', icon: siNodedotjs },
      },
      {
        name: 'Express',
        description: 'Rotas, middlewares e APIs simples de manter.',
        level: 100,
        color: '#64748b',
        icon: { type: 'brand', icon: siExpress },
      },
      {
        name: 'Python',
        description: 'Backend, automação, dados e scripts de produtividade.',
        level: 100,
        color: '#3776ab',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Django',
        description: 'Python para aplicações web com estrutura completa.',
        level: 100,
        color: '#0c4b33',
        icon: { type: 'brand', icon: siDjango },
      },
      {
        name: 'PostgreSQL',
        description: 'Modelagem, consultas e persistência relacional.',
        level: 100,
        color: '#4169e1',
        icon: { type: 'brand', icon: siPostgresql },
      },
      {
        name: 'MySQL',
        description: 'Banco relacional para sistemas web e aplicações internas.',
        level: 100,
        color: '#4479a1',
        icon: { type: 'brand', icon: siMysql },
      },
      {
        name: 'APIs públicas',
        description: 'Consumo, tratamento de retorno e integração entre sistemas.',
        level: 100,
        color: '#0f766e',
        icon: { type: 'line', icon: Globe2 },
      },
      {
        name: 'Modelagem de dados',
        description: 'Organização de entidades, relações e fluxo de informação.',
        level: 100,
        color: '#475569',
        icon: { type: 'line', icon: Database },
      },
      {
        name: 'Web scraping',
        description: 'Coleta, limpeza e estruturação de dados da web.',
        level: 100,
        color: '#2563eb',
        icon: { type: 'line', icon: SearchCode },
      },
      {
        name: 'FastAPI',
        description: 'Criação de APIs rápidas e tipadas para integrações e serviços de IA.',
        level: 100,
        color: '#009688',
        icon: { type: 'line', icon: Globe2 },
      },
      {
        name: 'pgvector',
        description: 'Uso do PostgreSQL com embeddings, similaridade e busca vetorial.',
        level: 100,
        color: '#4169e1',
        icon: { type: 'line', icon: Database },
      },
      {
        name: 'Banco de dados vetorial',
        description: 'Estruturação de bases para busca semântica e recuperação contextual.',
        level: 100,
        color: '#1d4ed8',
        icon: { type: 'line', icon: Database },
      },
    ],
  },
  {
    title: 'Dados e Visualização',
    summary: 'Transformo dados em análise, dashboards simples e visualizações úteis para decisão.',
    items: [
      {
        name: 'Python para dados',
        description: 'Limpeza, análise e automações com dados reais.',
        level: 100,
        color: '#3776ab',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Pandas',
        description: 'Tratamento de tabelas, filtros, agrupamentos e indicadores.',
        level: 100,
        color: '#150458',
        icon: { type: 'brand', icon: siPandas },
      },
      {
        name: 'Streamlit',
        description: 'Apps de dados, protótipos e painéis interativos.',
        level: 100,
        color: '#ff4b4b',
        icon: { type: 'brand', icon: siStreamlit },
      },
      {
        name: 'Visualização com Streamlit',
        description: 'Interfaces para explorar dados sem complicar o uso.',
        level: 100,
        color: '#ef4444',
        icon: { type: 'line', icon: ChartNoAxesCombined },
      },
      {
        name: 'Matplotlib',
        description: 'Gráficos para análise exploratória e relatórios técnicos.',
        level: 100,
        color: '#11557c',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Seaborn',
        description: 'Visualizações estatísticas com leitura mais clara.',
        level: 100,
        color: '#4f46e5',
        icon: { type: 'line', icon: Rows3 },
      },
    ],
  },
  {
    title: 'Frontend e Mobile',
    summary: 'Interfaces bem acabadas, responsivas e com atenção forte a experiência visual.',
    items: [
      {
        name: 'React',
        description: 'Componentes, estados, hooks e interfaces modernas.',
        level: 100,
        color: '#149eca',
        icon: { type: 'brand', icon: siReact },
      },
      {
        name: 'TypeScript',
        description: 'Tipagem para reduzir erro e deixar o código mais claro.',
        level: 100,
        color: '#3178c6',
        icon: { type: 'brand', icon: siTypescript },
      },
      {
        name: 'JavaScript',
        description: 'Base sólida para front, backend e automações.',
        level: 100,
        color: '#c9a227',
        icon: { type: 'brand', icon: siJavascript },
      },
      {
        name: 'HTML',
        description: 'Estrutura semântica, acessível e bem organizada.',
        level: 100,
        color: '#e34f26',
        icon: { type: 'brand', icon: siHtml5 },
      },
      {
        name: 'CSS',
        description: 'Layouts responsivos, animações e acabamento visual.',
        level: 100,
        color: '#1572b6',
        icon: { type: 'brand', icon: siCss },
      },
      {
        name: 'Angular',
        description: 'Aplicações front com estrutura e componentes reutilizáveis.',
        level: 100,
        color: '#c3002f',
        icon: { type: 'brand', icon: siAngular },
      },
      {
        name: 'Flutter',
        description: 'Desenvolvimento mobile com telas nativas e consistentes.',
        level: 100,
        color: '#02569b',
        icon: { type: 'brand', icon: siFlutter },
      },
      {
        name: 'Dart',
        description: 'Base para criar aplicações mobile com Flutter.',
        level: 100,
        color: '#0175c2',
        icon: { type: 'brand', icon: siDart },
      },
    ],
  },
  {
    title: 'Design, Produto e Conteúdo',
    summary: 'Tenho bom senso visual e sei transformar ideia em tela, apresentação e material claro.',
    items: [
      {
        name: 'Figma',
        description: 'Wireframes, layout visual, protótipos e organização de interface.',
        level: 100,
        color: '#f24e1e',
        icon: { type: 'brand', icon: siFigma },
      },
      {
        name: 'Design UX/UI',
        description: 'Fluxos, hierarquia visual, legibilidade e experiência de uso.',
        level: 100,
        color: '#7c3aed',
        icon: { type: 'line', icon: LayoutTemplate },
      },
      {
        name: 'Canva',
        description: 'Peças visuais rápidas para comunicação e apresentação.',
        level: 100,
        color: '#00c4cc',
        icon: { type: 'line', icon: Presentation },
      },
      {
        name: 'OBS Studio',
        description: 'Gravação, transmissão e produção de conteúdo visual.',
        level: 100,
        color: '#475569',
        icon: { type: 'brand', icon: siObsstudio },
      },
      {
        name: 'Google Planilhas / Excel',
        description: 'Organização de dados, fórmulas e controles operacionais.',
        level: 100,
        color: '#0f9d58',
        icon: { type: 'brand', icon: siGooglesheets },
      },
      {
        name: 'Google Docs / Word',
        description: 'Documentação, propostas, textos e estruturação de informação.',
        level: 100,
        color: '#4285f4',
        icon: { type: 'brand', icon: siGoogledocs },
      },
      {
        name: 'Google Apresentações',
        description: 'Slides claros para vender ideias e explicar soluções.',
        level: 100,
        color: '#fbbc04',
        icon: { type: 'brand', icon: siGoogleslides },
      },
    ],
  },
  {
    title: 'Gestão, Jogos e Processo',
    summary: 'Também entendo ferramentas de organização, método de trabalho e criação de experiências interativas.',
    items: [
      {
        name: 'Trello',
        description: 'Organização de tarefas, etapas, prioridade e acompanhamento.',
        level: 100,
        color: '#0052cc',
        icon: { type: 'brand', icon: siTrello },
      },
      {
        name: 'Scrum',
        description: 'Ritmo de entrega, cerimônias, backlog e colaboração em time.',
        level: 100,
        color: '#475569',
        icon: { type: 'line', icon: Workflow },
      },
      {
        name: 'Unity',
        description: 'Base para criação de games, cenas, lógica e interação.',
        level: 100,
        color: '#475569',
        icon: { type: 'brand', icon: siUnity },
      },
      {
        name: 'Criação de games',
        description: 'Noções de gameplay, prototipação e experiência interativa.',
        level: 100,
        color: '#6d5dfc',
        icon: { type: 'line', icon: Gamepad2 },
      },
    ],
  },
]

function SkillIcon({ skill }: { skill: TechSkill }) {
  return (
    <div
      className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105 dark:bg-white/95"
      style={{ boxShadow: `0 16px 32px -20px ${skill.color}` }}
    >
      {skill.icon.type === 'brand' ? (
        <svg
          aria-hidden
          className="absolute h-7 w-7"
          role="img"
          viewBox="0 0 24 24"
        >
          <path d={skill.icon.icon.path} fill={skill.color} />
        </svg>
      ) : (
        <skill.icon.icon
          aria-hidden
          className="absolute h-7 w-7"
          color={skill.color}
          strokeWidth={2}
        />
      )}
    </div>
  )
}

export function Skills() {
  const translatedGroups = TECH_GROUPS.map((group, groupIndex) => {
    const translated = UI.skills.groups[groupIndex]
    return {
      ...group,
      title: translated?.title ?? group.title,
      summary: translated?.summary ?? group.summary,
      items: group.items.map((item, itemIndex) => ({
        ...item,
        name: translated?.items[itemIndex]?.name ?? item.name,
        description: translated?.items[itemIndex]?.description ?? item.description,
      })),
    }
  })
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const activeGroup = translatedGroups[activeGroupIndex] ?? translatedGroups[0]
  const baseActiveGroup = TECH_GROUPS[activeGroupIndex] ?? TECH_GROUPS[0]
  const ActiveIcon = GROUP_ICONS[baseActiveGroup.title] ?? LayoutTemplate

  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow={UI.skills.eyebrow}
          title={
            <>
              <span className="text-gradient-static">{UI.skills.titleStart}</span>
              <span className="text-gradient">{UI.skills.titleAccent}</span>
              <span className="text-gradient-static">{UI.skills.titleEnd}</span>
            </>
          }
          description={UI.skills.description}
          descriptionClassName="max-w-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="liquid-card rounded-[1.5rem] p-4 sm:p-5"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div className="relative min-w-0 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white/60 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.09] sm:p-5">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 z-[2] h-1 bg-gradient-to-r from-accent-neon via-accent-cyan to-white/70 opacity-80"
              />
              <div className="relative z-[1]">
                <div className="mb-3 flex items-center justify-between gap-3 px-1">
                  <span className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-ink-mute">
                    {UI.skills.filterLabel}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center lg:hidden font-mono text-[10px] font-bold uppercase tracking-widest text-accent-cyan/90 animate-pulse">
                      {UI.skills.swipeLabel}
                      <ChevronRight size={14} className="ml-0.5" strokeWidth={3} />
                    </span>
                    <span className="font-mono text-[11px] font-black text-ink-mute">
                      {translatedGroups.length} {UI.skills.areasLabel}
                    </span>
                  </div>
                </div>

                <div className="relative -mx-1 px-1">
                  {/* Gradiente sutil nas bordas para indicar rolagem */}
                  <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-white/80 to-transparent dark:from-[#0f172a]/80 lg:hidden" />
                  
                  <div className="flex overflow-x-auto pb-3 pt-1 gap-2.5 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0 lg:pt-0" style={{ scrollbarWidth: 'none' }}>
                {translatedGroups.map((group, groupIndex) => {
                  const GroupIcon =
                    GROUP_ICONS[TECH_GROUPS[groupIndex]?.title ?? ''] ??
                    LayoutTemplate
                  const isActive = groupIndex === activeGroupIndex

                  return (
                    <button
                      key={group.title}
                      type="button"
                      onClick={() => setActiveGroupIndex(groupIndex)}
                      className={`group flex shrink-0 items-center gap-2.5 lg:gap-3 rounded-xl lg:rounded-xl border px-3 py-2.5 lg:px-3 lg:py-2.5 text-left transition-all duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/70 ${
                        isActive
                          ? 'border-accent-glow/60 bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-white'
                          : 'border-slate-200/50 bg-white/50 text-ink-dim hover:border-slate-200 hover:bg-white/70 dark:border-transparent dark:bg-transparent dark:hover:border-white/10 dark:hover:bg-white/[0.055]'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`shrink-0 transition-transform duration-300 group-hover:scale-105 h-8 w-8 lg:h-9 lg:w-9 ${
                          isActive
                            ? 'icon-tile'
                            : 'grid place-items-center rounded-lg bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-accent-neon'
                        }`}
                      >
                        <GroupIcon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[12.5px] lg:text-sm font-bold leading-tight sm:truncate">
                          {group.title}
                        </span>
                        <span className="hidden lg:block mt-0.5 font-mono text-[10px] font-black uppercase tracking-[0.16em] opacity-70">
                          {group.items.length} {UI.skills.skillsLabel}
                        </span>
                      </span>
                    </button>
                  )
                })}
                  </div>
                </div>
              </div>
            </div>

            <motion.article
              key={activeGroup.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-3">
                  <div className="icon-tile h-12 w-12 shrink-0">
                    <ActiveIcon size={22} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
                      {activeGroup.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-dim">
                      {activeGroup.summary}
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-ink-mute dark:border-white/10 dark:bg-white/[0.05]">
                  {String(activeGroup.items.length).padStart(2, '0')} {UI.skills.itemsLabel}
                </span>
              </div>

              <div className="grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {activeGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.025 * skillIndex }}
                    className="group relative flex min-h-[6.5rem] min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white/60 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-glow/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.09] dark:hover:border-accent-neon/60 dark:hover:bg-white/[0.13] sm:min-h-[8rem] sm:p-5 lg:p-6"
                    data-cursor="hover"
                    title={skill.description}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-accent-neon via-accent-cyan to-white/70 opacity-80"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -left-12 -top-10 z-0 h-[6.5rem] w-[6.5rem] rounded-full bg-gradient-to-br from-accent-glow/14 via-accent-cyan/8 to-transparent opacity-60 blur-[26px] dark:from-accent-cyan/12 dark:via-accent-neon/6 dark:to-transparent dark:opacity-70 dark:blur-[30px]"
                    />
                    <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                      <div>
                        <SkillIcon skill={skill} />
                        <h4 className="mt-2 break-words font-display text-[0.85rem] font-bold leading-snug text-ink sm:text-[0.95rem]">
                          {skill.name}
                        </h4>
                      </div>

                      <div className="mt-auto pt-3">
                        <div className="mb-1.5 flex items-center justify-between gap-2">
                          <span className="hidden sm:block font-mono text-[10px] font-black uppercase tracking-[0.14em] text-ink-mute">
                            {UI.skills.masteryLabel}
                          </span>
                          <span
                            className="skill-pct-value shrink-0 font-mono text-sm font-black tabular-nums tracking-tight drop-shadow-sm sm:text-[1.0625rem]"
                            style={{ '--skill-pct': skill.color } as CSSProperties}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
