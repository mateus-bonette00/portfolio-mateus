import { motion } from 'framer-motion'
import { Award, Calendar, Download, GraduationCap, MapPin } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { EDUCATION } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" data-codex-id="education-section" className="section">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow="Formação"
          title={
            <>
              <span className="text-gradient-static">Bacharelado em </span>
              <span className="text-gradient">Ciência da Computação</span>
              <span className="text-gradient-static">.</span>
            </>
          }
          description="Formação concluída na Universidade Federal de Itajubá (UNIFEI), uma das principais instituições de engenharia e tecnologia do país."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-3xl glass-strong group sm:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/formatura-unifei2.jpeg"
                  alt="Mateus Bonette na cerimônia de formatura da UNIFEI"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-glow">
                      Cerimônia de Colação de Grau
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-white drop-shadow">
                      UNIFEI · 2025
                    </div>
                  </div>
                  <span className="pill">
                    <GraduationCap size={12} />
                    Diplomado
                  </span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl glass group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/todos-formandos.jpg"
                  alt="Turma de formandos da UNIFEI"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 drop-shadow">
                    Turma 2025
                  </div>
                  <div className="font-display text-sm font-semibold text-white drop-shadow">
                    Ciência da Computação
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                Em números
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display text-3xl font-bold text-ink">5</div>
                  <div className="mt-1 text-xs text-ink-dim">anos de formação</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-ink">∞</div>
                  <div className="mt-1 text-xs text-ink-dim">linhas escritas</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="card p-7 sm:p-8"
            data-cursor="hover"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-cyan/20 text-accent ring-1 ring-accent/20 dark:text-white dark:ring-white/10">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-display text-2xl font-bold leading-tight text-ink">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 font-mono text-sm text-accent-glow">{EDUCATION.institution}</p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink-dim">
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-ink-mute" />
                {EDUCATION.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-ink-mute" />
                Itajubá, MG
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-dim">{EDUCATION.description}</p>

            <ul className="mt-7 space-y-3">
              {EDUCATION.achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3 transition-colors duration-300 hover:border-accent/30 hover:bg-white dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/15 dark:hover:bg-white/[0.05]"
                >
                  <Award size={16} className="mt-0.5 text-accent" />
                  <span className="text-sm text-ink">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all"
            data-cursor="hover"
            title="Ver Diploma — Bacharelado em Ciência da Computação · UNIFEI"
          >
            <span aria-hidden className="projects-view-all__glow" />
            <Download size={22} className="relative z-[2] shrink-0" aria-hidden />
            <span className="projects-view-all__text">Ver Diploma</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
