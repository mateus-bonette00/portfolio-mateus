import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Globe,
  ArrowLeft,
} from 'lucide-react'
import { DiscordIcon } from './icons/DiscordIcon'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { PROFILE } from '../data/portfolio'

const LINKS = [
  {
    label: 'Portfólio',
    description: 'Veja meus projetos e experiências',
    href: '/',
    icon: Globe,
    accent: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-500 dark:text-blue-400',
  },
  {
    label: 'LinkedIn',
    description: 'Conecte-se comigo profissionalmente',
    href: PROFILE.social.linkedin,
    icon: Linkedin,
    accent: 'from-sky-500/20 to-sky-600/10',
    iconColor: 'text-sky-500 dark:text-sky-400',
    external: true,
  },
  {
    label: 'GitHub',
    description: 'Confira meus repositórios e código',
    href: PROFILE.social.github,
    icon: Github,
    accent: 'from-slate-500/20 to-slate-600/10',
    iconColor: 'text-ink dark:text-ink',
    external: true,
  },
  {
    label: 'Instagram',
    description: 'Me siga nas redes sociais',
    href: PROFILE.social.instagram,
    icon: Instagram,
    accent: 'from-pink-500/20 to-purple-600/10',
    iconColor: 'text-pink-500 dark:text-pink-400',
    external: true,
  },
  {
    label: 'WhatsApp',
    description: 'Fale comigo diretamente',
    href: 'https://wa.me/5535988120174',
    icon: MessageCircle,
    accent: 'from-green-500/20 to-green-600/10',
    iconColor: 'text-green-500 dark:text-green-400',
    external: true,
  },
  {
    label: 'Discord',
    description: 'Me encontre no Discord',
    href: PROFILE.social.discord,
    icon: DiscordIcon,
    accent: 'from-indigo-500/20 to-indigo-600/10',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    external: true,
  },
  {
    label: 'E-mail',
    description: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    accent: 'from-orange-500/20 to-orange-600/10',
    iconColor: 'text-orange-500 dark:text-orange-400',
  },
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
    <div className="relative isolate min-h-screen overflow-x-hidden bg-bg text-ink">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="absolute right-4 top-4 z-50 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center px-5 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <a href="/" aria-label="Voltar ao portfólio">
            <Logo className="h-20 w-auto drop-shadow-[0_6px_24px_rgba(59,130,246,0.5)]" />
          </a>

          <div>
            <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {PROFILE.name}
            </h1>
            <p className="mt-1.5 text-sm font-medium text-ink-mute">{PROFILE.role}</p>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-ink-dim">
            {PROFILE.bio}
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 w-full space-y-3"
        >
          {LINKS.map((link) => {
            const Icon = link.icon
            return (
              <motion.li key={link.label} variants={item}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/60 hover:shadow-[0_8px_24px_-6px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/30 dark:hover:bg-white/[0.07]"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${link.accent}`}
                  />

                  <span
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/[0.06] ${link.iconColor}`}
                  >
                    <Icon size={20} />
                  </span>

                  <span className="relative flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-ink leading-tight">
                      {link.label}
                    </span>
                    <span className="text-xs text-ink-mute">{link.description}</span>
                  </span>

                  <span className="relative ml-auto text-ink-mute opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60 -translate-x-1">
                    <ArrowLeft size={16} className="rotate-180" />
                  </span>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-mute"
        >
          © {new Date().getFullYear()} {PROFILE.name}
        </motion.p>
      </main>
    </div>
  )
}
