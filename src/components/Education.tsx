import { motion } from 'framer-motion'
import { Award, Calendar, CheckCircle2, Clock, Download, GraduationCap, Languages, MapPin } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { EDUCATION, UI } from '../data/portfolio'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-1200 relative z-10">
        <SectionTitle
          eyebrow={UI.education.eyebrow}
          title={`${UI.education.titleStart}${UI.education.titleAccent}${UI.education.titleEnd}`}
          description={UI.education.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-3xl glass-strong group sm:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/formatura-unifei2.jpeg"
                  alt={UI.education.mainImageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-glow">
                      {UI.education.ceremony}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-white drop-shadow">
                      UNIFEI · 2025
                    </div>
                  </div>
                  <span className="pill">
                    <GraduationCap size={12} />
                    {UI.education.graduated}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl glass group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/todos-formandos.jpg"
                  alt={UI.education.classImageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80 drop-shadow">
                    {UI.education.classYear}
                  </div>
                  <div className="font-display text-sm font-semibold text-white drop-shadow">
                    {UI.education.degreeShort}
                  </div>
                </div>
              </div>
            </div>

            <div className="card flex flex-col justify-between p-6">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-neon/15 dark:text-accent-neon">
                  <Languages size={16} />
                </span>
                <div>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                    {UI.education.languagesLabel}
                  </div>
                  <div className="text-xs text-ink-dim">{UI.education.languagesSubtitle}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {EDUCATION.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white/70 px-3.5 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <span className="font-display text-sm font-bold text-ink">{lang.name}</span>
                    <span className="font-mono text-xs font-medium text-accent dark:text-accent-neon">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <article className="card p-6 sm:p-7" data-cursor="hover">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent dark:text-accent-neon">
                  {UI.education.postgradEyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent dark:border-accent-neon/30 dark:bg-accent-neon/10 dark:text-accent-neon">
                  <Clock size={12} aria-hidden />
                  {EDUCATION.postgrad.status}
                </span>
              </div>

              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                {EDUCATION.postgrad.degree}
              </h3>
              <p className="mt-1 font-mono text-sm font-medium text-ink-dim">
                {EDUCATION.postgrad.institution}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ink-dim">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-ink-mute" />
                  {EDUCATION.postgrad.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                {EDUCATION.postgrad.description}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {EDUCATION.postgrad.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-2.5 text-xs leading-relaxed text-ink dark:border-white/[0.08] dark:bg-white/[0.03]"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent dark:text-accent-neon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card p-6 sm:p-7" data-cursor="hover">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">
                  {UI.education.gradEyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
                  <GraduationCap size={12} aria-hidden />
                  {UI.education.statusCompleted}
                </span>
              </div>

              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                {EDUCATION.degree}
              </h3>
              <p className="mt-1 font-mono text-sm font-medium text-accent dark:text-accent-neon">
                {EDUCATION.institution}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-dim">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} className="text-ink-mute" />
                  {EDUCATION.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-ink-mute" />
                  {UI.education.location}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-dim">{EDUCATION.description}</p>

              <ul className="mt-5 space-y-2.5">
                {EDUCATION.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 transition-colors duration-200 hover:border-accent/30 hover:bg-white dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/15 dark:hover:bg-white/[0.05]"
                  >
                    <Award size={15} className="mt-0.5 shrink-0 text-accent dark:text-accent-neon" />
                    <span className="text-sm text-ink">{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex w-full justify-center px-3 sm:px-4 md:px-0"
        >
          <a
            href="/Diploma_Graduacao_2020001519.pdf"
            download="Diploma_Graduacao_2020001519.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all"
            data-cursor="hover"
            title={UI.education.diplomaTitle}
          >
            <span aria-hidden className="projects-view-all__glow" />
            <Download size={22} className="relative z-[2] shrink-0" aria-hidden />
            <span className="projects-view-all__text">{UI.education.viewDiploma}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
