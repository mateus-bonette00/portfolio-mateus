import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { PROFILE, UI } from '../data/portfolio'
import { DiscordIcon } from './icons/DiscordIcon'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

export function Contact() {
  return (
    <section id="contact" data-codex-id="contact-section" className="section">
      <div className="container-1200 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-bg-soft sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dark:bg-accent/22" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-[320px] w-[500px] rounded-full bg-accent-cyan/8 blur-[120px] dark:bg-accent-cyan/16" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25] dark:opacity-30" />

          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="eyebrow-rule" aria-hidden />
              <span className="heading-eyebrow">{UI.contact.eyebrow}</span>
            </div>

            <h2 className="mt-4 section-title-display max-w-3xl">
              <span className="text-gradient">{UI.contact.title}</span>
            </h2>

            <div className="mt-5 min-w-0 space-y-4 text-lg leading-relaxed text-ink-dim sm:max-w-xl sm:text-xl">
              {UI.contact.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-primary group"
                data-cursor="hover"
              >
                <Mail size={16} />
                {PROFILE.email}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={PROFILE.social.whatsapp}
                className="btn-ghost group"
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
              <a
                href={PROFILE.social.linkedin}
                className="btn-ghost group"
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={PROFILE.social.github}
                className="btn-ghost group"
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={PROFILE.social.instagram}
                className="btn-ghost group"
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href={PROFILE.social.discord}
                className="btn-ghost group"
                data-cursor="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon size={16} />
                Discord (mateusbonette)
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:grid-cols-2">
              <InfoBlock label={UI.contact.responseLabel} value={UI.contact.responseValue} />
              <InfoBlock label={UI.contact.locationLabel} value={UI.contact.locationValue} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoBlock({
  label,
  value,
  pulse,
}: {
  label: string
  value: string
  pulse?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      {pulse ? (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
      ) : (
        <span className="h-2 w-2 rounded-full bg-ink/30" />
      )}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
          {label}
        </div>
        <div className="font-display text-sm font-bold text-ink">{value}</div>
      </div>
    </div>
  )
}
