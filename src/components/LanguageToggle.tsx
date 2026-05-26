import { Globe2 } from 'lucide-react'
import {
  getCurrentLocale,
  getLocalizedCurrentPath,
  LOCALE_LABELS,
  setStoredLocale,
  type Locale,
} from '../i18n/routes'
import { UI } from '../data/portfolio'

type Props = {
  className?: string
  compact?: boolean
  mobileFull?: boolean
  mobileTop?: boolean
  navbarCenter?: boolean
}

const LOCALES: Locale[] = ['pt-BR', 'en']

export function LanguageToggle({ className = '', compact = false, mobileFull = false, mobileTop = false, navbarCenter = false }: Props) {
  const currentLocale = getCurrentLocale()

  if (navbarCenter) {
    return (
      <div
        className={`language-toggle-navbar inline-flex shrink-0 items-center gap-0.5 rounded-full p-1 ${className}`}
        aria-label={UI.language.label}
      >
        <span aria-hidden className="language-toggle-navbar__glow" />
        {LOCALES.map((locale) => {
          const isActive = locale === currentLocale
          const label = LOCALE_LABELS[locale]

          return (
            <a
              key={locale}
              href={getLocalizedCurrentPath(locale)}
              onClick={() => setStoredLocale(locale)}
              aria-label={locale === 'pt-BR' ? UI.language.switchToPortuguese : UI.language.switchToEnglish}
              aria-current={isActive ? 'true' : undefined}
              className={`relative z-[2] inline-flex items-center justify-center gap-1 rounded-full font-mono font-black uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 h-8 min-w-10 px-3 text-[10px] ${
                isActive
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-blue-200/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-[12px] leading-none">{locale === 'pt-BR' ? '🇧🇷' : '🇬🇧'}</span>
              {label}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 text-ink shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] ${
        mobileFull ? 'w-full max-w-[14rem] justify-center' : ''
      } ${
        mobileTop ? 'gap-0.5 p-0.5' : ''
      } ${className}`}
      aria-label={UI.language.label}
    >
      {!compact && <Globe2 size={14} className="ml-1.5 text-ink-mute" aria-hidden />}
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale
        const label = LOCALE_LABELS[locale]

        return (
          <a
            key={locale}
            href={getLocalizedCurrentPath(locale)}
            onClick={() => setStoredLocale(locale)}
            aria-label={locale === 'pt-BR' ? UI.language.switchToPortuguese : UI.language.switchToEnglish}
            aria-current={isActive ? 'true' : undefined}
            className={`inline-flex items-center justify-center gap-1.5 rounded-full font-mono font-black uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              mobileTop ? 'h-7 min-w-7 px-1.5 text-[9px]' : 'h-7 min-w-9 px-2.5 text-[10px]'
            } ${
              mobileFull ? 'flex-1' : ''
            } ${
              isActive
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink-dim hover:bg-slate-100 hover:text-ink dark:text-blue-100/75 dark:hover:bg-white/10 dark:hover:text-white'
            }`}
          >
            <span className="text-[12px] leading-none">{locale === 'pt-BR' ? '🇧🇷' : '🇬🇧'}</span>
            {label}
          </a>
        )
      })}
    </div>
  )
}
