import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, GraduationCap, Layers, Rocket, Sparkles } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'Base acadêmica',
    text: 'Formado em Ciência da Computação pela UNIFEI, com base sólida para aprender, construir e evoluir com consistência.',
  },
  {
    icon: BrainCircuit,
    title: 'Direção em IA',
    text: 'Estou direcionando minha carreira para inteligência artificial aplicada, automações e sistemas inteligentes.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Visão comercial',
    text: 'Minha experiência com vendas e marketing me ajuda a pensar em tecnologia conectada com resultado de negócio.',
  },
  {
    icon: Layers,
    title: 'Full stack',
    text: 'Gosto de entender o produto inteiro: interface, backend, dados, usuário, processo e impacto final.',
  },
  {
    icon: Rocket,
    title: 'Ritmo de evolução',
    text: 'Tenho energia para aprender, testar, corrigir rota e continuar melhorando todo dia.',
  },
  {
    icon: Sparkles,
    title: 'Criatividade prática',
    text: 'Uso criatividade para simplificar, criar alternativas e encontrar caminhos que funcionam na vida real.',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-1200 relative z-10">
        <div className="grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="xl:sticky xl:top-28">
            <SectionTitle
              eyebrow="Sobre mim"
              title={
                <>
                  <span className="text-gradient-static">Tecnologia, negócio e </span>
                  <span className="text-gradient">evolução</span>
                  <span className="text-gradient-static">.</span>
                </>
              }
              description="Sou formado em Ciência da Computação pela UNIFEI. Construo soluções que fazem sentido para pessoas e empresas, juntando desenvolvimento full stack, interesse forte por IA e visão comercial."
            />

            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-card liquid-hover group relative rounded-2xl p-2"
              data-cursor="hover"
            >
              <div className="relative z-10 aspect-[16/11] overflow-hidden rounded-xl">
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
                    Ciência da Computação · UNIFEI
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
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
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
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
