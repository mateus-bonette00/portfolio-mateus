import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { SKILLS } from '../data/portfolio'

const CATEGORIES: { id: 'frontend' | 'backend' | 'data' | 'devops' | 'tools'; label: string }[] = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'data', label: 'Dados' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Tooling' },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Stack"
          title={
            <>
              <span className="text-gradient-static">Tecnologias que </span>
              <span className="text-gradient">uso no dia a dia</span>
              <span className="text-gradient-static">.</span>
            </>
          }
          description="Um conjunto enxuto e moderno. Escolhido pela qualidade dos resultados, não pelo hype."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {CATEGORIES.map((cat, i) => {
            const items = SKILLS.filter((s) => s.category === cat.id)
            if (items.length === 0) return null
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                className="card p-6 sm:p-7"
                data-cursor="hover"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-ink sm:text-lg">{cat.label}</h3>
                  <span className="font-mono text-[11px] text-ink-mute">
                    {String(i + 1).padStart(2, '0')} / {String(CATEGORIES.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {items.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-ink">{s.name}</span>
                        <span className="font-mono text-[11px] text-ink-mute">{s.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          className="skill-bar-fill"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
