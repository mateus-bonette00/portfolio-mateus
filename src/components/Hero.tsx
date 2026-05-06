import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { ArrowDown, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/portfolio'
import { DiscordIcon } from './icons/DiscordIcon'

const HERO_NAME = 'Mateus Bonette'

export function Hero() {
  return (
    <section
      id="hero"
      data-codex-id="home-hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      <div className="container-1200 relative z-10">
        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-3xl flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-avatar-shell hero-photo-stage relative h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44"
          >
            <img
              src="/images/mateus-profile.jpg"
              alt={HERO_NAME}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight text-gradient sm:text-6xl lg:text-[5rem]"
          >
            {HERO_NAME}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-ink-dim sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <SocialIcon href={PROFILE.social.github} label="GitHub">
              <Github size={18} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.discord} label="Discord">
              <DiscordIcon size={18} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${PROFILE.email}`} label="E-mail">
              <Mail size={18} />
            </SocialIcon>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-14 inline-flex items-center justify-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.28em] text-ink-mute transition-colors hover:text-accent dark:hover:text-accent-neon"
            aria-label="Rolar para baixo"
          >
            <ArrowDown size={14} className="animate-bounce shrink-0" strokeWidth={2.25} />
            Role para baixo
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon group relative inline-flex h-11 w-11 items-center justify-center rounded-full glass text-ink-dim transition-all duration-200 hover:border-accent/45 hover:text-ink dark:text-slate-300 dark:hover:text-white cursor-pointer"
    >
      {children}
    </a>
  )
}
