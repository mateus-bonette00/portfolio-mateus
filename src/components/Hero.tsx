import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Instagram, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { PROFILE, UI } from '../data/portfolio'
import { PROFILE_IMAGE_PATH, RESUME_DOWNLOAD_FILENAME, RESUME_PDF_PATH } from '../constants/assets'
import { getLocalizedHref } from '../i18n/routes'
import { DiscordIcon } from './icons/DiscordIcon'
import { SocialIcon } from './SocialIcon'

const HERO_NAME = 'Mateus Bonette'

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
            className="hero-avatar-shell hero-photo-stage relative h-[179px] w-[179px] overflow-hidden rounded-full sm:h-[211px] sm:w-[211px]"
          >
            <img
              src={PROFILE_IMAGE_PATH}
              alt={HERO_NAME}
              className="hero-profile-photo"
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
            className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-ink-dim sm:text-xl"
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
                download={RESUME_DOWNLOAD_FILENAME}
                className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold"
              >
                <Download size={16} />
                {UI.hero.downloadResume}
              </a>
              <a
                href={getLocalizedHref('#contact')}
                className="btn-hero-contact"
              >
                <MessageSquare size={16} />
                {UI.hero.contact}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href={getLocalizedHref('#projects')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6 mt-4 inline-flex items-center justify-center gap-2.5 self-center text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-700 transition-colors hover:text-blue-600 sm:mb-8 sm:mt-6 sm:gap-3 sm:text-sm sm:tracking-[0.24em] md:text-[0.9375rem] md:tracking-[0.26em] dark:text-blue-200 dark:hover:text-blue-100"
          aria-label={UI.hero.scrollDownAria}
        >
          <ArrowDown
            className="h-3.5 w-3.5 shrink-0 animate-bounce sm:h-4 sm:w-4 md:h-[1.125rem] md:w-[1.125rem]"
            strokeWidth={2.5}
          />
          {UI.hero.scrollDown}
        </motion.a>
      </div>
    </section>
  )
}
