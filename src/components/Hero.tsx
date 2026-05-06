import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { ArrowDown, Download, Github, Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { PROFILE } from '../data/portfolio'
import { DiscordIcon } from './icons/DiscordIcon'

const HERO_NAME = 'Mateus Bonette'
const RESUME_PDF_PATH = '/curriculo-mateus-bonette.pdf'

export function Hero() {
  return (
    <section
      id="hero"
      data-codex-id="home-hero"
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden pt-28 sm:pt-32"
    >
      <div className="container-1200 relative z-10 flex w-full flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="-mt-3 rounded-full border border-slate-200/85 bg-white/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-ink shadow-soft backdrop-blur-xl dark:border-white/12 dark:bg-white/[0.06] dark:text-slate-100 sm:-mt-4 sm:text-[11px]"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Status • Online Para Novas Oportunidades
            </span>
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
            <SocialIcon href={PROFILE.social.discord} label="Discord (mateusbonette)">
              <DiscordIcon size={18} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${PROFILE.email}`} label="E-mail">
              <Mail size={18} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 w-full max-w-xl"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={RESUME_PDF_PATH}
                download
                className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold"
              >
                <Download size={16} />
                Baixar currículo
              </a>
              <a
                href="#contact"
                className="btn-hero-contact"
              >
                <MessageSquare size={16} />
                Entrar em contato
              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6 mt-4 inline-flex items-center justify-center gap-2.5 self-center text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-700 transition-colors hover:text-blue-600 sm:mb-8 sm:mt-6 sm:gap-3 sm:text-sm sm:tracking-[0.24em] md:text-[0.9375rem] md:tracking-[0.26em] dark:text-blue-200 dark:hover:text-blue-100"
          aria-label="Rolar para baixo"
        >
          <ArrowDown
            className="h-3.5 w-3.5 shrink-0 animate-bounce sm:h-4 sm:w-4 md:h-[1.125rem] md:w-[1.125rem]"
            strokeWidth={2.5}
          />
          Role para baixo
        </motion.a>
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
      className="social-icon icon-tile h-10 w-10 relative inline-flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer"
    >
      {children}
    </a>
  )
}
