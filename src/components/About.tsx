import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, GraduationCap, Layers, Rocket, Sparkles } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'Base Acadêmica',
    text: 'Formado em Ciência da Computação pela UNIFEI, com base sólida para aprender, construir e evoluir com consistência.',
  },
  {
    icon: BrainCircuit,
    title: 'Direção em IA',
    text: 'Atuo com inteligência artificial aplicada, agentes com LLMs, automações inteligentes e visão computacional.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Visão Comercial',
    text: 'Minha experiência com vendas e marketing me ajuda a pensar em tecnologia conectada com cliente, produto e resultado.',
  },
  {
    icon: Layers,
    title: 'Full Stack',
    text: 'Gosto de entender o produto inteiro: interface, backend, dados, usuário, processo e impacto final.',
  },
  {
    icon: Rocket,
    title: 'Empreendedorismo',
    text: 'Penso como dono: olho para problema, oportunidade, custo, execução e retorno antes de escolher o caminho.',
  },
  {
    icon: Sparkles,
    title: 'Comunicação Prática',
    text: 'Minha experiência como professor me ajuda a explicar ideias difíceis de forma simples e alinhar pessoas diferentes.',
  },
]

const ABOUT_PARAGRAPHS = [
  'Sou desenvolvedor full stack e Engenheiro de IA há 3 anos e meio, formado em Ciência da Computação pela UNIFEI (Universidade Federal de Itajubá). Construo sistemas web, mobile e produtos de inteligência artificial na prática, como agentes com LLMs, automações inteligentes e visão computacional aplicada à indústria.',
  'O que me diferencia é o caminho até aqui. Antes de programar profissionalmente, atuei dois anos como professor de cursinho e passei pela área comercial em fábricas de software, com vendas e marketing. Aprendi cedo a explicar coisa difícil de forma simples, ouvir o cliente antes de propor solução e pensar produto, não só código.',
  'Hoje uno três coisas que raramente andam juntas: domínio técnico, leitura de negócio e mentalidade de dono. Gosto de problemas difíceis, entrego com foco em resultado e penso cada projeto como se fosse meu.',
]

export function About() {
  return (
    <section id="about" data-codex-id="about-section" className="section">
      <div className="container-1200 relative z-10">
        <div className="grid items-stretch gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="grid h-full grid-rows-[auto_auto_1fr] gap-6 2xl:sticky 2xl:top-28">
            <SectionTitle
              eyebrow="Sobre mim"
              title={
                <>
                  <span className="text-gradient-static">Tecnologia, Negócio e </span>
                  <span className="text-gradient">Evolução</span>
                  <span className="text-gradient-static">.</span>
                </>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="-mt-4 max-w-[72ch] space-y-4 text-pretty text-[1.125rem] leading-8 text-ink-dim sm:text-[1.25rem] sm:leading-8"
            >
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-card liquid-hover group relative mx-auto h-full w-full max-w-[36rem] rounded-2xl p-2 xl:mx-0 xl:max-w-none"
              data-cursor="hover"
            >
              <div className="relative z-10 h-full min-h-[clamp(20rem,42vw,41rem)] overflow-hidden rounded-xl xl:min-h-0">
                <img
                  src="/images/formatura-unifei2.jpeg"
                  alt="Mateus Bonette na cerimônia de formatura da UNIFEI"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent-glow">
                    Formação
                  </div>
                  <div className="mt-1 font-display text-base font-bold text-white">
                    Ciência da Computação · UNIFEI · 2025
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:pt-20">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: 0.04 * i }}
                className="liquid-card liquid-hover group rounded-2xl p-5 sm:p-6"
                data-cursor="hover"
              >
                <div className="icon-tile h-10 w-10">
                  <p.icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-[1.07rem] leading-relaxed text-ink-dim sm:text-lg">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
