import { motion } from 'framer-motion'
import {
  HeartHandshake,
  Megaphone,
  Rocket,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

type SkillCard = {
  icon: LucideIcon
  title: string
  text: string
  tag: string
}

const SOFT_SKILLS: SkillCard[] = [
  {
    icon: Rocket,
    title: 'Produtividade Com Direção',
    text: 'Pego problema bagunçado e transformo em entrega. Já desenvolvi sistemas de agendamento, plataformas de cursos com pagamento integrado e e-commerce do começo ao fim.',
    tag: 'Produtivo',
  },
  {
    icon: Megaphone,
    title: 'Comunicação Comercial',
    text: 'Sei explicar ideia técnica para quem decide. Já trabalhei com vendas, marketing e tráfego pago, e vendi sistemas e sites para clínicas, imobiliárias e e-commerce.',
    tag: 'Comercial',
  },
  {
    icon: HeartHandshake,
    title: 'Cabeça De Dono',
    text: 'Penso como dono do problema, não como executor de tarefa. Entendo a dor, mensuro o impacto e busco a solução mais útil para o cliente, o time e o negócio.',
    tag: 'Dono',
  },
  {
    icon: Workflow,
    title: 'Automação No Dia A Dia',
    text: 'Quando vejo tarefa repetitiva, eu automatizo. Trabalho com APIs, web scraping, robôs e agentes de IA, e tenho bot rodando em servidor próprio que coloquei em produção.',
    tag: 'Automação',
  },
]

const VALUE_POINTS = [
  'Resolver Problemas Reais',
  'Vender A Solução Certa',
  'Automatizar Com IA',
  'Entregar Com Clareza',
]

export function ValueDashboard() {
  return (
    <section
      id="value"
      data-codex-id="value-section"
      className="section scroll-mt-36 overflow-hidden"
    >
      <div className="container-1200 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-accent-glow/35 bg-accent-deep p-5 text-white shadow-glow-accent sm:p-7 lg:p-10"
        >
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-neon/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />

          <div className="relative">
            <div className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 text-center backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-neon shadow-[0_0_24px_rgba(96,165,250,0.9)]" />
                <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-100">
                  Como Eu Trabalho
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center">
                <h2 className="max-w-5xl break-words font-display text-[clamp(2.45rem,4.7vw,4.65rem)] font-bold leading-[0.98] tracking-tight text-white">
                  Resolvo Problemas, Comunico Valor E Automatizo Rotinas.
                </h2>
                <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-blue-100 sm:text-lg">
                  Quero entrar em um time para entregar de verdade: produzir com foco, comunicar com clareza, pensar no lado de negócio e transformar tarefa manual em processo inteligente.
                </p>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {VALUE_POINTS.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-white/50 bg-white/[0.12] px-4 py-2 text-sm font-medium text-white"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-flow-dense gap-4 md:grid-cols-2 lg:grid-cols-4">
              {SOFT_SKILLS.map((skill, i) => (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative min-h-[18rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.09] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-neon/60 hover:bg-white/[0.13] sm:p-6"
                  data-cursor="hover"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-neon via-accent-cyan to-white/70 opacity-80"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-deep shadow-glow-accent transition-transform duration-500 group-hover:scale-110">
                      <skill.icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="rounded-full border border-white/5 bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100/70">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.6] text-blue-100">
                    {skill.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative mt-5 rounded-[1.35rem] border border-white/5 bg-white/[0.04] px-5 py-4 backdrop-blur-xl sm:px-6">
            <p className="font-display text-lg font-medium leading-snug text-white/90 italic sm:text-xl">
              Em resumo, gosto de pegar uma dor real, entender o lado humano e comercial, criar uma solução simples e usar IA e automação para eliminar o que toma tempo do time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
