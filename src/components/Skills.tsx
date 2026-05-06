import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  ChartNoAxesCombined,
  Code2,
  Database,
  Gamepad2,
  Globe2,
  LayoutTemplate,
  Presentation,
  Rows3,
  SearchCode,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  siAngular,
  siClaude,
  siCss,
  siCursor,
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
  'Frontend e mobile': LayoutTemplate,
  'Backend, APIs e bancos': Database,
  'Dados e visualização': ChartNoAxesCombined,
  'IA, automação e dev tools': Bot,
  'Design, produto e conteúdo': Presentation,
  'Gestão, jogos e processo': Workflow,
}

const TECH_GROUPS: TechGroup[] = [
  {
    title: 'Frontend e mobile',
    summary: 'Interfaces bem acabadas, responsivas e com atenção forte a experiência visual.',
    items: [
      {
        name: 'React',
        description: 'Componentes, estados, hooks e interfaces modernas.',
        level: 92,
        color: '#149eca',
        icon: { type: 'brand', icon: siReact },
      },
      {
        name: 'TypeScript',
        description: 'Tipagem para reduzir erro e deixar o código mais claro.',
        level: 90,
        color: '#3178c6',
        icon: { type: 'brand', icon: siTypescript },
      },
      {
        name: 'JavaScript',
        description: 'Base sólida para front, backend e automações.',
        level: 90,
        color: '#c9a227',
        icon: { type: 'brand', icon: siJavascript },
      },
      {
        name: 'HTML',
        description: 'Estrutura semântica, acessível e bem organizada.',
        level: 94,
        color: '#e34f26',
        icon: { type: 'brand', icon: siHtml5 },
      },
      {
        name: 'CSS',
        description: 'Layouts responsivos, animações e acabamento visual.',
        level: 92,
        color: '#1572b6',
        icon: { type: 'brand', icon: siCss },
      },
      {
        name: 'Angular',
        description: 'Aplicações front com estrutura e componentes reutilizáveis.',
        level: 78,
        color: '#c3002f',
        icon: { type: 'brand', icon: siAngular },
      },
      {
        name: 'Flutter',
        description: 'Desenvolvimento mobile com telas nativas e consistentes.',
        level: 72,
        color: '#02569b',
        icon: { type: 'brand', icon: siFlutter },
      },
      {
        name: 'Dart',
        description: 'Base para criar aplicações mobile com Flutter.',
        level: 70,
        color: '#0175c2',
        icon: { type: 'brand', icon: siDart },
      },
    ],
  },
  {
    title: 'Backend, APIs e bancos',
    summary: 'Construção de serviços, integração com dados e organização de regras de negócio.',
    items: [
      {
        name: 'Node.js',
        description: 'APIs, serviços e integrações do lado do servidor.',
        level: 88,
        color: '#5fa04e',
        icon: { type: 'brand', icon: siNodedotjs },
      },
      {
        name: 'Express',
        description: 'Rotas, middlewares e APIs simples de manter.',
        level: 86,
        color: '#64748b',
        icon: { type: 'brand', icon: siExpress },
      },
      {
        name: 'Python',
        description: 'Backend, automação, dados e scripts de produtividade.',
        level: 86,
        color: '#3776ab',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Django',
        description: 'Python para aplicações web com estrutura completa.',
        level: 82,
        color: '#0c4b33',
        icon: { type: 'brand', icon: siDjango },
      },
      {
        name: 'PostgreSQL',
        description: 'Modelagem, consultas e persistência relacional.',
        level: 85,
        color: '#4169e1',
        icon: { type: 'brand', icon: siPostgresql },
      },
      {
        name: 'MySQL',
        description: 'Banco relacional para sistemas web e aplicações internas.',
        level: 80,
        color: '#4479a1',
        icon: { type: 'brand', icon: siMysql },
      },
      {
        name: 'APIs públicas',
        description: 'Consumo, tratamento de retorno e integração entre sistemas.',
        level: 86,
        color: '#0f766e',
        icon: { type: 'line', icon: Globe2 },
      },
      {
        name: 'Modelagem de dados',
        description: 'Organização de entidades, relações e fluxo de informação.',
        level: 80,
        color: '#475569',
        icon: { type: 'line', icon: Database },
      },
      {
        name: 'Web scraping',
        description: 'Coleta, limpeza e estruturação de dados da web.',
        level: 82,
        color: '#2563eb',
        icon: { type: 'line', icon: SearchCode },
      },
    ],
  },
  {
    title: 'Dados e visualização',
    summary: 'Transformo dados em análise, dashboards simples e visualizações úteis para decisão.',
    items: [
      {
        name: 'Python para dados',
        description: 'Limpeza, análise e automações com dados reais.',
        level: 84,
        color: '#3776ab',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Pandas',
        description: 'Tratamento de tabelas, filtros, agrupamentos e indicadores.',
        level: 82,
        color: '#150458',
        icon: { type: 'brand', icon: siPandas },
      },
      {
        name: 'Streamlit',
        description: 'Apps de dados, protótipos e painéis interativos.',
        level: 84,
        color: '#ff4b4b',
        icon: { type: 'brand', icon: siStreamlit },
      },
      {
        name: 'Visualização com Streamlit',
        description: 'Interfaces para explorar dados sem complicar o uso.',
        level: 86,
        color: '#ef4444',
        icon: { type: 'line', icon: ChartNoAxesCombined },
      },
      {
        name: 'Matplotlib',
        description: 'Gráficos para análise exploratória e relatórios técnicos.',
        level: 78,
        color: '#11557c',
        icon: { type: 'brand', icon: siPython },
      },
      {
        name: 'Seaborn',
        description: 'Visualizações estatísticas com leitura mais clara.',
        level: 76,
        color: '#4f46e5',
        icon: { type: 'line', icon: Rows3 },
      },
    ],
  },
  {
    title: 'IA, automação e dev tools',
    summary: 'Uso ferramentas modernas para acelerar desenvolvimento, revisar código e automatizar tarefas.',
    items: [
      {
        name: 'Cursor',
        description: 'Desenvolvimento assistido por IA dentro do editor.',
        level: 90,
        color: '#6d5dfc',
        icon: { type: 'brand', icon: siCursor },
      },
      {
        name: 'Claude Code',
        description: 'Análise de código, refatoração e apoio em implementação.',
        level: 88,
        color: '#b35a3a',
        icon: { type: 'brand', icon: siClaude },
      },
      {
        name: 'Codex',
        description: 'Agentes de código para criar, corrigir e validar projetos.',
        level: 90,
        color: '#10a37f',
        icon: { type: 'line', icon: Code2 },
      },
      {
        name: 'Docker',
        description: 'Ambientes isolados para rodar aplicações com mais previsibilidade.',
        level: 80,
        color: '#2496ed',
        icon: { type: 'brand', icon: siDocker },
      },
      {
        name: 'Git',
        description: 'Versionamento, histórico e organização do trabalho.',
        level: 92,
        color: '#f05032',
        icon: { type: 'brand', icon: siGit },
      },
      {
        name: 'GitHub',
        description: 'Repositórios, colaboração, issues e entrega de código.',
        level: 90,
        color: '#475569',
        icon: { type: 'brand', icon: siGithub },
      },
      {
        name: 'GitLab',
        description: 'Fluxo de repositórios, pipelines e organização de projeto.',
        level: 78,
        color: '#fc6d26',
        icon: { type: 'brand', icon: siGitlab },
      },
      {
        name: 'Automação com IA',
        description: 'Redução de trabalho repetitivo usando scripts, agentes e integrações.',
        level: 86,
        color: '#0f766e',
        icon: { type: 'line', icon: Bot },
      },
    ],
  },
  {
    title: 'Design, produto e conteúdo',
    summary: 'Tenho bom senso visual e sei transformar ideia em tela, apresentação e material claro.',
    items: [
      {
        name: 'Figma',
        description: 'Wireframes, layout visual, protótipos e organização de interface.',
        level: 86,
        color: '#f24e1e',
        icon: { type: 'brand', icon: siFigma },
      },
      {
        name: 'Design UX/UI',
        description: 'Fluxos, hierarquia visual, legibilidade e experiência de uso.',
        level: 88,
        color: '#7c3aed',
        icon: { type: 'line', icon: LayoutTemplate },
      },
      {
        name: 'Canva',
        description: 'Peças visuais rápidas para comunicação e apresentação.',
        level: 84,
        color: '#00c4cc',
        icon: { type: 'line', icon: Presentation },
      },
      {
        name: 'OBS Studio',
        description: 'Gravação, transmissão e produção de conteúdo visual.',
        level: 74,
        color: '#475569',
        icon: { type: 'brand', icon: siObsstudio },
      },
      {
        name: 'Google Planilhas / Excel',
        description: 'Organização de dados, fórmulas e controles operacionais.',
        level: 82,
        color: '#0f9d58',
        icon: { type: 'brand', icon: siGooglesheets },
      },
      {
        name: 'Google Docs / Word',
        description: 'Documentação, propostas, textos e estruturação de informação.',
        level: 84,
        color: '#4285f4',
        icon: { type: 'brand', icon: siGoogledocs },
      },
      {
        name: 'Google Apresentações',
        description: 'Slides claros para vender ideias e explicar soluções.',
        level: 82,
        color: '#fbbc04',
        icon: { type: 'brand', icon: siGoogleslides },
      },
    ],
  },
  {
    title: 'Gestão, jogos e processo',
    summary: 'Também entendo ferramentas de organização, método de trabalho e criação de experiências interativas.',
    items: [
      {
        name: 'Trello',
        description: 'Organização de tarefas, etapas, prioridade e acompanhamento.',
        level: 82,
        color: '#0052cc',
        icon: { type: 'brand', icon: siTrello },
      },
      {
        name: 'Scrum',
        description: 'Ritmo de entrega, cerimônias, backlog e colaboração em time.',
        level: 76,
        color: '#475569',
        icon: { type: 'line', icon: Workflow },
      },
      {
        name: 'Unity',
        description: 'Base para criação de games, cenas, lógica e interação.',
        level: 68,
        color: '#475569',
        icon: { type: 'brand', icon: siUnity },
      },
      {
        name: 'Criação de games',
        description: 'Noções de gameplay, prototipação e experiência interativa.',
        level: 66,
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
  const [activeGroupTitle, setActiveGroupTitle] = useState(TECH_GROUPS[0].title)
  const activeGroup = TECH_GROUPS.find((group) => group.title === activeGroupTitle) ?? TECH_GROUPS[0]
  const ActiveIcon = GROUP_ICONS[activeGroup.title] ?? LayoutTemplate

  return (
    <section id="skills" data-codex-id="technologies-section" className="section overflow-hidden">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Stack"
          title={
            <>
              <span className="text-gradient-static">Tecnologias que </span>
              <span className="text-gradient">uso para entregar</span>
              <span className="text-gradient-static">.</span>
            </>
          }
          description="Full stack, IA, dados, design e automação. Não é só lista de ferramenta: é o conjunto que uso para transformar problema em produto funcionando."
          descriptionClassName="max-w-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="liquid-card rounded-[1.5rem] p-4 sm:p-5"
        >
          <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[1.15rem] border border-slate-200 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <span className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-ink-mute">
                  Filtrar stack
                </span>
                <span className="font-mono text-[11px] font-black text-ink-mute">
                  {TECH_GROUPS.length} áreas
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-1">
                {TECH_GROUPS.map((group) => {
                  const GroupIcon = GROUP_ICONS[group.title] ?? LayoutTemplate
                  const isActive = group.title === activeGroup.title

                  return (
                    <button
                      key={group.title}
                      type="button"
                      onClick={() => setActiveGroupTitle(group.title)}
                      className={`group flex min-w-[13rem] items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/70 sm:min-w-0 ${
                        isActive
                          ? 'border-accent-glow/60 bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-white'
                          : 'border-transparent bg-transparent text-ink-dim hover:border-slate-200 hover:bg-white/70 dark:hover:border-white/10 dark:hover:bg-white/[0.055]'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105 ${
                          isActive
                            ? 'bg-accent-deep text-white dark:bg-accent-neon dark:text-accent-deep'
                            : 'bg-white text-accent-deep shadow-soft dark:bg-white/10 dark:text-accent-neon'
                        }`}
                      >
                        <GroupIcon size={18} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-sm font-bold">{group.title}</span>
                        <span className="mt-0.5 block font-mono text-[10px] font-black uppercase tracking-[0.16em] opacity-70">
                          {group.items.length} habilidades
                        </span>
                      </span>
                    </button>
                  )
                })}
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
                <div className="flex gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-deep text-white shadow-glow-accent dark:bg-white dark:text-accent-deep">
                    <ActiveIcon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                      {activeGroup.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-dim">
                      {activeGroup.summary}
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-ink-mute dark:border-white/10 dark:bg-white/[0.05]">
                  {String(activeGroup.items.length).padStart(2, '0')} itens
                </span>
              </div>

              <div className="grid grid-flow-dense gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {activeGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.025 * skillIndex }}
                    className="group flex min-h-[8rem] min-w-0 flex-col rounded-xl border border-slate-200 bg-white/90 p-3.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-glow/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.045] dark:hover:bg-white/[0.07]"
                    data-cursor="hover"
                    title={skill.description}
                  >
                    <div>
                      <SkillIcon skill={skill} />
                      <h4 className="mt-2 break-words font-display text-[0.95rem] font-bold leading-snug text-ink">
                        {skill.name}
                      </h4>
                    </div>

                    <div className="mt-auto pt-3">
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.14em] text-ink-mute">
                          domínio
                        </span>
                        <span
                          className="font-mono text-[11px] font-black"
                          style={{ color: skill.color }}
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
