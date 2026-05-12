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
  },
  {
    label: 'LinkedIn',
    description: 'Conecte-se comigo profissionalmente',
    href: PROFILE.social.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    description: 'Confira meus repositórios e código',
    href: PROFILE.social.github,
    icon: Github,
    external: true,
  },
  {
    label: 'Instagram',
    description: 'Me siga nas redes sociais',
    href: PROFILE.social.instagram,
    icon: Instagram,
    external: true,
  },
  {
    label: 'WhatsApp',
    description: 'Fale comigo diretamente',
    href: 'https://wa.me/5535988120174',
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'Discord',
    description: 'Me encontre no Discord',
    href: PROFILE.social.discord,
    icon: DiscordIcon,
    external: true,
  },
  {
    label: 'E-mail',
    description: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
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
                  className="links-page-action group"
                >
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-300/45 bg-white/55 text-blue-700 shadow-sm dark:border-blue-400/30 dark:bg-white/[0.08] dark:text-blue-200">
                    <Icon size={20} />
                  </span>

                  <span className="relative flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-sm font-semibold leading-tight text-blue-900 dark:text-blue-100">
                      {link.label}
                    </span>
                    <span className="text-xs text-blue-800/70 dark:text-blue-100/65">
                      {link.description}
                    </span>
                  </span>

                  <span className="relative shrink-0 text-blue-800/50 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-70 dark:text-blue-100/50 -translate-x-1">
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
