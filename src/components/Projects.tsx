import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { PROJECTS } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" data-codex-id="projects-section" className="section">
      <div className="container-1200 relative z-10">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Projetos"
            title={
              <>
                <span className="text-gradient-static">Trabalhos que </span>
                <span className="text-gradient">construí</span>
                <span className="text-gradient-static">.</span>
              </>
            }
            description="Seleção em construção. Em breve, casos completos com problema, processo e resultado."
          />
          <a
            href="#contact"
            className="btn-ghost mb-2 hidden lg:inline-flex"
            data-cursor="hover"
          >
            Ver todos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
              className="card card-hover group relative p-0 overflow-hidden"
              data-cursor="hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/20 via-accent-cyan/10 to-transparent">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-bg/0 via-transparent to-bg/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ProjectGlyph index={i} />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent-cyan/20" />
                </div>
                <div className="absolute right-3 top-3 flex gap-2">
                  {p.year && <span className="pill">{p.year}</span>}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
                    {p.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {p.repo && (
                      <a
                        href={p.repo}
                        aria-label="Repositório"
                        className="rounded-full p-2 text-ink-dim hover:bg-slate-100 hover:text-ink dark:hover:bg-white/10"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <a
                      href={p.link ?? '#'}
                      aria-label="Abrir projeto"
                      className="rounded-full p-2 text-ink-dim hover:bg-slate-100 hover:text-ink dark:hover:bg-white/10"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectGlyph({ index }: { index: number }) {
  const variants = [
    <svg key="0" width="120" height="120" viewBox="0 0 120 120" className="text-accent/30 dark:text-white/20" aria-hidden>
      <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="12" fill="currentColor" opacity="0.4" />
      <path d="M60 16v88M16 60h88" stroke="currentColor" strokeWidth="1" />
    </svg>,
    <svg key="1" width="120" height="120" viewBox="0 0 120 120" className="text-accent/30 dark:text-white/20" aria-hidden>
      <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="35" y="35" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 20l80 80M100 20L20 100" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>,
    <svg key="2" width="120" height="120" viewBox="0 0 120 120" className="text-accent/30 dark:text-white/20" aria-hidden>
      <polygon points="60,14 102,86 18,86" fill="none" stroke="currentColor" strokeWidth="1" />
      <polygon points="60,32 86,80 34,80" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1" />
    </svg>,
    <svg key="3" width="120" height="120" viewBox="0 0 120 120" className="text-accent/30 dark:text-white/20" aria-hidden>
      <path d="M20 60 Q60 14 100 60 T180 60" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 60 Q60 106 100 60 T180 60" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="6" fill="currentColor" />
    </svg>,
  ]
  return variants[index % variants.length]
}
