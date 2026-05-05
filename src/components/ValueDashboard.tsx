import { motion } from 'framer-motion'
import {
  Lightbulb,
  MessagesSquare,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { SectionTitle } from './SectionTitle'

type SkillCard = {
  icon: LucideIcon
  title: string
  text: string
  tag: string
}

const SOFT_SKILLS: SkillCard[] = [
  {
    icon: Target,
    title: 'Resolvo problemas com iniciativa',
    text: 'Enxergo minha função como resolver problemas. Quando vejo algo que pode melhorar, eu vou atrás. Entendo o contexto, organizo as partes e proponho um caminho, sem esperar receber tudo pronto.',
    tag: 'Iniciativa',
  },
  {
    icon: MessagesSquare,
    title: 'Comunico bem e crio relações',
    text: 'Converso com pessoas diferentes com naturalidade. Explico ideias técnicas de forma simples e ouço antes de responder. Construo boas relações no time e faço amizade com facilidade.',
    tag: 'Pessoas',
  },
  {
    icon: Lightbulb,
    title: 'Penso em soluções práticas',
    text: 'Gosto de criar alternativas e melhorar processos. Tenho interesse pela parte comercial e conecto a solução técnica ao impacto real que ela entrega para o usuário e para o negócio.',
    tag: 'Impacto',
  },
]

export function ValueDashboard() {
  return (
    <section id="value" className="section">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Soft skills"
          title={
            <>
              <span className="text-gradient-static">Penso, </span>
              <span className="text-gradient">alinho</span>
              <span className="text-gradient-static">, entrego.</span>
            </>
          }
          description="Acredito que a função de um profissional é resolver problemas. Por isso trabalho com iniciativa, comunicação clara e atenção ao impacto real do que entrego."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {SOFT_SKILLS.map((skill, i) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-card liquid-hover group rounded-2xl p-6 sm:p-7"
              data-cursor="hover"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="icon-tile h-11 w-11">
                  <skill.icon size={20} strokeWidth={2} />
                </div>
                <span className="tag">{skill.tag}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-tight text-ink sm:text-xl">
                {skill.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-dim">
                {skill.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >
          {[
            'Iniciativa antes da ordem',
            'Diálogo antes do achismo',
            'Solução antes do ego',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink dark:border-white/10 dark:bg-white/[0.04]"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
