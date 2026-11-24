import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Megaphone,
  Rocket,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { UI } from '../data/portfolio'

const SOFT_SKILL_ICONS: LucideIcon[] = [Rocket, Megaphone, HeartHandshake, Workflow]

export function ValueDashboard() {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)
  const [mobileExpandedSkill, setMobileExpandedSkill] = useState(false)
  const [mobileExpandedSummary, setMobileExpandedSummary] = useState(false)

  const activeSkill = UI.value.cards[mobileActiveIndex]
  const ActiveSkillIcon = SOFT_SKILL_ICONS[mobileActiveIndex] ?? Rocket
  const activeSkillLong = activeSkill.text.length > 165
  const activeSkillText = mobileExpandedSkill || !activeSkillLong
    ? activeSkill.text
    : `${activeSkill.text.slice(0, 165).trimEnd()}...`

  const goToPrevSkill = () => {
    setMobileExpandedSkill(false)
    setMobileActiveIndex((current) => (current === 0 ? UI.value.cards.length - 1 : current - 1))
  }

  const goToNextSkill = () => {
    setMobileExpandedSkill(false)
    setMobileActiveIndex((current) => (current === UI.value.cards.length - 1 ? 0 : current + 1))
  }

  return (
    <section
      id="value"
      className="section scroll-mt-36 overflow-hidden"
    >
      <div className="container-1200 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7 lg:p-10"
        >
          <div className="relative">
            <div className="flex flex-col items-center rounded-[1.5rem] border border-slate-200 bg-slate-50/50 p-4 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="eyebrow-rule" aria-hidden />
                <p className="heading-eyebrow">{UI.value.eyebrow}</p>
              </div>

              <div className="mt-3 flex flex-col items-center sm:mt-5">
                <h2 className="section-title-display max-w-5xl break-words font-display text-[clamp(1.58rem,6.5vw,3.4rem)] font-bold leading-[1.06] tracking-tight text-ink">
                  {UI.value.titleStart}
                  {UI.value.titleAccent}
                  {UI.value.titleEnd}
                </h2>
                <p className="mx-auto mt-3 max-w-[640px] text-[13px] leading-relaxed text-ink-dim dark:text-slate-300 sm:mt-5 sm:text-lg">
                  {UI.value.intro}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {UI.value.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-dim shadow-soft dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:shadow-none sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 md:hidden">
              <div className="flex items-center justify-between gap-3 rounded-[1rem] border border-slate-200 bg-white/70 px-3 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                <button
                  type="button"
                  onClick={goToPrevSkill}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-white/10 dark:bg-white/[0.08] dark:text-blue-100"
                  aria-label={UI.value.previousAria}
                >
                  <ChevronLeft size={18} strokeWidth={2.2} />
                </button>

                <div className="min-w-0 text-center">
                  <p className="font-mono text-[11px] font-semibold text-ink-dim dark:text-slate-300">
                    {activeSkill.title}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-ink-mute dark:text-slate-400">
                    {mobileActiveIndex + 1} / {UI.value.cards.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={goToNextSkill}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-white/10 dark:bg-white/[0.08] dark:text-blue-100"
                  aria-label={UI.value.nextAria}
                >
                  <ChevronRight size={18} strokeWidth={2.2} />
                </button>
              </div>

              <motion.article
                key={`${mobileActiveIndex}-${activeSkill.title}`}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-3 group relative overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
                data-cursor="hover"
              >
                <div className="icon-tile h-10 w-10 shrink-0">
                  <ActiveSkillIcon size={19} strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 font-display text-[1.35rem] font-bold leading-snug text-ink dark:text-white">
                  {activeSkill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim dark:text-slate-300">
                  {activeSkillText}
                </p>
                {activeSkillLong && (
                  <button
                    type="button"
                    onClick={() => setMobileExpandedSkill((current) => !current)}
                    className="mt-3 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[11px] font-semibold text-accent dark:border-accent-neon/30 dark:bg-accent-neon/10 dark:text-accent-neon"
                  >
                    {mobileExpandedSkill ? UI.common.readLess : UI.common.readMore}
                  </button>
                )}
              </motion.article>

              <div className="mt-3 flex justify-center gap-1.5">
                {UI.value.cards.map((skill, i) => (
                  <span
                    key={skill.title}
                    className={`h-1.5 rounded-full transition-all ${
                      i === mobileActiveIndex
                        ? 'w-6 bg-accent'
                        : 'w-1.5 bg-slate-300 dark:bg-white/20'
                    }`}
                    aria-hidden
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 hidden grid-flow-dense gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
              {UI.value.cards.map((skill, i) => {
                const Icon = SOFT_SKILL_ICONS[i] ?? Rocket
                return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-glow/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-accent-neon/50 dark:hover:bg-white/[0.1] sm:p-6"
                  data-cursor="hover"
                >
                  <div className="icon-tile h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-dim dark:text-slate-300">
                    {skill.text}
                  </p>
                </motion.article>
              )})}
            </div>
          </div>

          <div className="relative mt-4 rounded-[1.1rem] border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:mt-5 sm:rounded-[1.35rem] sm:px-6 sm:py-4">
            <p className="hidden font-display text-lg font-medium leading-snug text-ink-dim dark:text-slate-200 sm:block">
              {UI.value.desktopSummary}
            </p>
            <div className="sm:hidden">
              <p className="font-display text-[0.97rem] font-medium leading-snug text-ink-dim dark:text-slate-200">
                {UI.value.mobileSummary}
              </p>
              <button
                type="button"
                onClick={() => setMobileExpandedSummary((current) => !current)}
                className="mt-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent dark:border-accent-neon/30 dark:bg-accent-neon/10 dark:text-accent-neon"
              >
                {mobileExpandedSummary ? UI.value.hideSummary : UI.value.readSummary}
              </button>
              {mobileExpandedSummary && (
                <p className="mt-2 text-sm leading-relaxed text-ink-dim dark:text-slate-300">
                  {UI.value.mobileSummaryExpanded}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
