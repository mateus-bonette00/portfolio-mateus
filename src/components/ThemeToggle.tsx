import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { UI } from '../data/portfolio'

type Props = {
  className?: string
}

export function ThemeToggle({ className = '' }: Props) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? UI.theme.enableLight : UI.theme.enableDark}
      title={isDark ? UI.theme.lightTitle : UI.theme.darkTitle}
      className={`relative inline-flex shrink-0 basis-9 items-center justify-center overflow-hidden rounded-full glass text-ink transition-colors duration-300 hover:border-accent/40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${className}`}
      style={{ width: '2.25rem', height: '2.25rem' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -16, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon size={16} strokeWidth={2} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 16, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -16, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun size={16} strokeWidth={2} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
