import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE, UI } from '../data/portfolio'
import { Logo } from './Logo'
import { getLocalizedHref } from '../i18n/routes'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer relative pb-12 pt-12 sm:pb-14">
      <div className="container-1200">
        <div className="flex flex-col items-center gap-10 border-t border-slate-200 pt-10 dark:border-white/10">
          <a
            href={getLocalizedHref('#hero')}
            className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6"
            aria-label={UI.footer.backToTop}
          >
            <Logo className="h-[4.75rem] w-auto opacity-90 sm:h-[5.125rem]" alt="" />
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="eyebrow-rule" aria-hidden />
              <span className="heading-eyebrow">{PROFILE.role}</span>
            </div>
          </a>

          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            <FooterAction href={PROFILE.social.github} label="GitHub" external>
              <Github size={22} className="relative z-[2] shrink-0" aria-hidden />
            </FooterAction>
            <FooterAction href={PROFILE.social.linkedin} label="LinkedIn" external>
              <Linkedin size={22} className="relative z-[2] shrink-0" aria-hidden />
            </FooterAction>
            <FooterAction href={`mailto:${PROFILE.email}`} label="E-mail" external>
              <Mail size={22} className="relative z-[2] shrink-0" aria-hidden />
            </FooterAction>
            <FooterAction href={getLocalizedHref('#hero')} label={UI.footer.top}>
              <ArrowUp size={22} className="relative z-[2] shrink-0" aria-hidden />
            </FooterAction>
          </div>

          <div className="flex w-full flex-col items-center justify-center border-t border-slate-200 pt-8 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.22em] text-ink-mute dark:border-white/10">
            <span>
              © {year} {PROFILE.name}. {UI.footer.text}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterAction({
  href,
  label,
  external,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="projects-view-all"
      data-cursor="hover"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span aria-hidden className="projects-view-all__glow" />
      {children}
      <span className="projects-view-all__text">{label}</span>
    </a>
  )
}
