import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCES } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experience" data-codex-id="experience-section" className="section">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Experiências"
          title={
            <>
              <span className="text-gradient-static">Papéis em que </span>
              <span className="text-gradient">entreguei valor</span>
              <span className="text-gradient-static">.</span>
            </>
          }
          description="Contexto, responsabilidades e aprendizados em cada etapa da carreira."
        />

        <div className="grid gap-5">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-card liquid-hover group rounded-2xl p-6 sm:p-7"
              data-cursor="hover"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="icon-tile h-11 w-11 shrink-0">
                    <Building2 size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-accent dark:text-accent-neon">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="pill w-fit shrink-0 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-dim sm:pl-14">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-line/60 pt-4 text-sm text-ink-dim sm:pl-14 dark:border-white/10">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-neon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
