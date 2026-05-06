import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/portfolio'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer data-codex-id="footer-section" className="relative pb-12 pt-12 sm:pb-14">
      <div className="container-1200">
        <div className="flex flex-col items-center gap-8 border-t border-slate-200 pt-10 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="Voltar ao topo">
            <Logo className="h-12 w-auto opacity-90" alt="" />
            <div>
              <div className="font-display text-base font-semibold text-ink">
                {PROFILE.name}
              </div>
              <div className="mt-1.5 flex items-center gap-4">
                <span className="eyebrow-rule" aria-hidden />
                <span className="heading-eyebrow">{PROFILE.role}</span>
              </div>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <FooterIcon href={PROFILE.social.github} label="GitHub">
              <Github size={16} />
            </FooterIcon>
            <FooterIcon href={PROFILE.social.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </FooterIcon>
            <FooterIcon href={`mailto:${PROFILE.email}`} label="E-mail">
              <Mail size={16} />
            </FooterIcon>
            <a
              href="#hero"
              aria-label="Voltar ao topo"
              className="ml-2 inline-flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 text-xs font-medium text-ink-dim transition-all duration-300 hover:border-accent/40 hover:text-ink dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
            >
              Topo
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ink-mute sm:flex-row sm:justify-between sm:text-left">
          <span>
            © {year} {PROFILE.name}. Feito com café e atenção aos detalhes.
          </span>
          <span>v1.0 · {PROFILE.location}</span>
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-ink-dim transition-all duration-300 hover:border-accent/40 hover:text-ink dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
    >
      {children}
    </a>
  )
}
