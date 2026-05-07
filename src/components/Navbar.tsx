import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  History,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

const NAV_ICONS: Record<string, LucideIcon> = {
  '#hero': Home,
  '#about': UserRound,
  '#projects': BriefcaseBusiness,
  '#skills': Code2,
  '#experience': History,
  '#contact': Mail,
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#hero')
  const isHomePage = typeof window === 'undefined' || window.location.pathname === '/'
  const homeHref = (href: string) => (isHomePage ? href : `/${href}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      const id = link.href.replace('#', '')
      const element = document.getElementById(id)
      return element ? { href: link.href, element } : null
    }).filter((section): section is { href: string; element: HTMLElement } => !!section)

    if (sections.length === 0) return

    const syncActiveSection = () => {
      const scrollY = window.scrollY
      const viewportProbe = scrollY + window.innerHeight * 0.35
      let current = sections[0].href

      for (const section of sections) {
        if (viewportProbe >= section.element.offsetTop - 150) {
          current = section.href
        }
      }

      setActive((prev) => (prev === current ? prev : current))
    }

    const syncFromHash = () => {
      const hash = window.location.hash
      if (!hash) {
        syncActiveSection()
        return
      }

      if (NAV_LINKS.some((link) => link.href === hash)) {
        setActive(hash)
      }
    }

    syncFromHash()
    window.addEventListener('scroll', syncActiveSection, { passive: true })
    window.addEventListener('resize', syncActiveSection)
    window.addEventListener('hashchange', syncFromHash)

    return () => {
      window.removeEventListener('scroll', syncActiveSection)
      window.removeEventListener('resize', syncActiveSection)
      window.removeEventListener('hashchange', syncFromHash)
    }
  }, [])

  return (
    <header data-codex-id="site-navbar" className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-[1200px] rounded-2xl border transition-all duration-500 ${
          scrolled
            ? 'border-slate-200/80 bg-white/80 backdrop-blur-2xl shadow-soft dark:border-white/10 dark:bg-bg/70'
            : 'border-slate-200/60 bg-white/60 backdrop-blur-xl dark:border-white/[0.06] dark:bg-white/[0.02]'
        }`}
      >
        <div className="grid grid-cols-3 items-center px-5 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
          <ul className="hidden items-center justify-end gap-2 pr-4 lg:flex xl:pr-6">
            {NAV_LINKS.slice(0, 3).map((l) => (
              <NavLink
                key={l.href}
                href={homeHref(l.href)}
                active={active === l.href}
                label={l.label}
                onClick={() => setActive(l.href)}
              />
            ))}
          </ul>

          <a
            href={homeHref('#hero')}
            className="relative col-span-3 flex items-center justify-center lg:col-span-1"
            aria-label="Mateus Bonette - Início"
          >
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 mx-auto my-auto h-24 w-24 rounded-full blur-2xl transition-opacity duration-500 sm:h-28 sm:w-28 lg:h-32 lg:w-32 ${
                scrolled ? 'opacity-70' : 'opacity-90'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(96,165,250,0.45) 0%, rgba(59,130,246,0.22) 45%, transparent 72%)',
              }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <Logo
                className={`logo-adaptive mx-auto h-16 w-auto select-none object-contain transition-all duration-500 sm:h-20 lg:h-24 ${
                  scrolled
                    ? 'drop-shadow-[0_4px_18px_rgba(59,130,246,0.45)]'
                    : 'drop-shadow-[0_8px_32px_rgba(59,130,246,0.55)]'
                }`}
              />
            </motion.span>
          </a>

          <div className="hidden items-center justify-start gap-2 pl-4 lg:flex xl:pl-6">
            {NAV_LINKS.slice(3).map((l) => (
              <NavLink
                key={l.href}
                href={homeHref(l.href)}
                active={active === l.href}
                label={l.label}
                onClick={() => setActive(l.href)}
              />
            ))}
            <ThemeToggle className="ml-1" />
          </div>

          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full glass p-2 cursor-pointer"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 border-t border-slate-200/70 px-4 py-4 dark:border-white/10">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <MobileNavLink
                      href={homeHref(l.href)}
                      label={l.label}
                      active={active === l.href}
                      onClick={() => {
                        setActive(l.href)
                        setOpen(false)
                      }}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active: boolean
  onClick: () => void
}) {
  const Icon = NAV_ICONS[href] ?? Home

  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link relative inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
        active ? 'nav-link-active' : 'border-transparent text-ink-dim hover:text-ink dark:text-slate-300 dark:hover:text-white'
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-xl bg-accent/10 dark:bg-accent/15"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <Icon size={15} strokeWidth={2.2} className="relative shrink-0" />
      <span className="relative">{label}</span>
    </a>
  )
}

function MobileNavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active: boolean
  onClick: () => void
}) {
  const Icon = NAV_ICONS[href] ?? Home

  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
        active
          ? 'nav-link-active'
          : 'border-transparent text-ink-dim hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
      }`}
    >
      <span className="inline-flex items-center gap-3">
        <Icon size={16} strokeWidth={2.2} className="shrink-0" />
        {label}
      </span>
      <ChevronRight size={16} strokeWidth={2.2} aria-hidden />
    </a>
  )
}
