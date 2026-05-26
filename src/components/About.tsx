import { motion } from 'framer-motion'
import { BrainCircuit, BriefcaseBusiness, GraduationCap, Layers, Rocket, Sparkles } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { UI } from '../data/portfolio'

const PILLAR_ICONS = [GraduationCap, BrainCircuit, BriefcaseBusiness, Layers, Rocket, Sparkles]

export function About() {
  return (
    <section id="about" data-codex-id="about-section" className="section">
      <div className="container-1200 relative z-10">
        <div className="grid items-stretch gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="grid h-full grid-rows-[auto_auto_1fr] gap-6 2xl:sticky 2xl:top-28">
            <SectionTitle
              eyebrow={UI.about.eyebrow}
              title={
                <>
                  <span className="text-gradient-static">{UI.about.titleStart}</span>
                  <span className="text-gradient">{UI.about.titleAccent}</span>
                  <span className="text-gradient-static">{UI.about.titleEnd}</span>
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
              {UI.about.paragraphs.map((paragraph) => (
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
                  alt={UI.about.graduationImageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent-glow">
                    {UI.about.graduationLabel}
                  </div>
                  <div className="mt-1 font-display text-base font-bold text-white">
                    {UI.about.graduationCaption}
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:pt-20">
            {UI.about.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i] ?? Sparkles
              return (
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
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-[1.07rem] leading-relaxed text-ink-dim sm:text-lg">
                  {p.text}
                </p>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}
