import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Globe, Mail, ArrowLeft, FileText } from 'lucide-react'
import { DiscordIcon } from './icons/DiscordIcon'
import { Logo } from './Logo'
import { SocialIcon } from './SocialIcon'
import { ThemeToggle } from './ThemeToggle'
import { PROFILE, UI } from '../data/portfolio'
import { PROFILE_IMAGE_PATH, RESUME_DOWNLOAD_FILENAME, RESUME_PDF_PATH } from '../constants/assets'
import { getLocalizedHref } from '../i18n/routes'
import { LanguageToggle } from './LanguageToggle'

type LinkEntry = {
  label: string
  description: string
  href: string
  icon: LucideIcon
  external?: boolean
  download?: string
}

const LINKS: LinkEntry[] = [
  ...UI.linksPage.links.map((link) => {
    const config = {
      portfolio: {
        href: getLocalizedHref('/'),
        icon: Globe,
      },
      linkedin: {
        href: PROFILE.social.linkedin,
        icon: Linkedin,
        external: true,
      },
      resume: {
        href: RESUME_PDF_PATH,
        icon: FileText,
        download: RESUME_DOWNLOAD_FILENAME,
      },
      github: {
        href: PROFILE.social.github,
        icon: Github,
        external: true,
      },
    }[link.kind]

    return {
      label: link.label,
      description: link.description,
      ...config,
    }
  }),
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function LinksPage() {
  return (
    <>
      <div className="absolute right-3 top-3 z-50 flex items-center gap-2 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <main className="relative z-10 mx-auto flex min-h-svh w-full max-w-xl flex-col items-center px-4 pb-28 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:px-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-full flex-col items-center gap-2 text-center sm:gap-2.5"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="hero-avatar-shell hero-photo-stage relative h-[163px] w-[163px] overflow-hidden rounded-full sm:h-[195px] sm:w-[195px]"
          >
            <img
              src={PROFILE_IMAGE_PATH}
              alt={PROFILE.name}
              className="hero-profile-photo"
              loading="eager"
            />
          </motion.div>


          <div className="mt-1.5 w-full min-w-0 sm:mt-2">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="links-page-name text-[22px] leading-[0.98] tracking-tight text-gradient sm:text-2xl md:text-[28px]"
            >
              {PROFILE.name}
            </motion.h1>
            <p className="mt-0.5 w-full text-pretty text-[11px] font-medium leading-snug text-ink-mute sm:text-xs">
              {PROFILE.tagline}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1 flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:mt-1 sm:gap-2"
          >
            <SocialIcon href={PROFILE.social.github} label="GitHub">
              <Github size={16} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.discord} label="Discord (mateusbonette)">
              <DiscordIcon size={16} />
            </SocialIcon>
            <SocialIcon href={PROFILE.social.instagram} label="Instagram">
              <Instagram size={16} />
            </SocialIcon>
            <SocialIcon href={`mailto:${PROFILE.email}`} label="E-mail">
              <Mail size={16} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 mb-1"
          >
            <LanguageToggle navbarCenter />
          </motion.div>

          <p className="mt-1 w-full min-w-0 text-pretty text-[0.8125rem] leading-snug text-ink-dim sm:mt-1.5 sm:text-sm sm:leading-relaxed md:max-w-xl">
            {PROFILE.bio}
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-3 w-full max-w-[min(100%,19rem)] space-y-3 px-0 sm:mt-4 sm:max-w-[20rem] sm:space-y-3.5 md:max-w-[21rem]"
        >
          {LINKS.map((link) => {
            const Icon = link.icon
            return (
              <motion.li key={link.label} variants={item} className="relative">
                <a
                  href={link.href}
                  download={link.download}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="links-page-action group min-h-[2.75rem] touch-manipulation sm:min-h-0"
                >
                  <span
                    aria-hidden
                    className="links-page-action__glow"
                  />
                  <span className="links-page-action__row">
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-300/45 bg-white/55 text-blue-700 shadow-sm dark:border-blue-400/30 dark:bg-white/[0.08] dark:text-blue-200">
                      <Icon size={16} />
                    </span>

                    <span className="relative flex min-w-0 flex-1 flex-col gap-0">
                      <span className="text-xs font-semibold leading-tight text-blue-900 dark:text-blue-100 sm:text-[0.8125rem]">
                        {link.label}
                      </span>
                      <span className="text-[11px] leading-snug text-blue-800/75 dark:text-blue-100/60 sm:text-xs">
                        {link.description}
                      </span>
                    </span>

                    <span className="relative shrink-0 text-blue-800/60 opacity-70 transition-opacity duration-200 group-hover:opacity-100 dark:text-blue-100/60">
                      <ArrowLeft size={14} className="rotate-180" />
                    </span>
                  </span>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-8 flex w-full max-w-full flex-col items-center justify-center gap-3 px-2 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a
            href={getLocalizedHref('/')}
            aria-label={UI.linksPage.backToPortfolio}
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <Logo className="h-11 w-auto drop-shadow-[0_6px_24px_rgba(59,130,246,0.45)] sm:h-14" />
          </a>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute sm:text-[11px] sm:tracking-[0.25em]">
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
        </motion.div>
      </main>
    </>
  )
}
