import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, Github, Instagram, Linkedin, MapPin, MessageSquare } from 'lucide-react'
import { PROFILE, UI } from '../data/portfolio'
import { PROFILE_IMAGE_PATH, RESUME_DOWNLOAD_FILENAME, RESUME_PDF_PATH } from '../constants/assets'
import { getLocalizedHref } from '../i18n/routes'
import { CopyEmailControl } from './CopyEmailControl'
import { DiscordIcon } from './icons/DiscordIcon'
import { SocialIcon } from './SocialIcon'

const HERO_NAME = 'Mateus Bonette'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 28])
  const contentY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 16])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden pt-[var(--navbar-offset)]"
    >
      <div className="container-1200 relative z-10 flex w-full flex-1 flex-col">
        <motion.div
          style={{ y: contentY }}
          className="mx-auto my-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-avatar-shell hero-photo-stage relative mt-6 h-[179px] w-[179px] overflow-hidden rounded-full sm:mt-8 sm:h-[211px] sm:w-[211px] lg:mt-10"
          >
            <img
              src={PROFILE_IMAGE_PATH}
              alt={UI.metadata.imageAlt}
              className="hero-profile-photo"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-center font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[4.75rem]"
          >
            <span className="block sm:hidden">Mateus</span>
            <span className="block sm:hidden">Bonette</span>
            <span className="hidden sm:inline">{HERO_NAME}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-center font-display text-xl font-semibold leading-tight tracking-tight text-accent dark:text-accent-neon sm:text-2xl lg:text-[1.75rem]"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-2xl text-pretty text-base font-medium leading-relaxed text-ink-dim sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-ink-mute sm:text-sm"
          >
            <MapPin size={14} className="shrink-0 text-accent dark:text-accent-neon" aria-hidden />
            <span>{UI.hero.availability}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex w-full flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center gap-3">
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
            </div>

            <CopyEmailControl variant="hero" />
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
        </motion.div>

        <motion.a
          href={getLocalizedHref('#projects')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="group mb-6 mt-4 inline-flex items-center justify-center gap-2 self-center text-xs font-mono font-semibold tracking-[0.12em] text-blue-700 transition-colors hover:text-blue-600 sm:mb-8 sm:mt-6 sm:text-sm dark:text-blue-200 dark:hover:text-blue-100"
          aria-label={UI.hero.scrollDownAria}
        >
          <ArrowDown
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5 sm:h-4 sm:w-4"
            strokeWidth={2.2}
            aria-hidden
          />
          {UI.hero.scrollDown}
        </motion.a>
      </div>
    </section>
  )
}
