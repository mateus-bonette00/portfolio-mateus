export type Locale = 'pt-BR' | 'en'

export const DEFAULT_LOCALE: Locale = 'pt-BR'

export const LOCALE_SEGMENTS: Record<Locale, string> = {
  'pt-BR': 'pt-br',
  en: 'en',
}

export const LOCALE_LABELS: Record<Locale, string> = {
  'pt-BR': 'PT-BR',
  en: 'EN',
}

const STORAGE_KEY = 'portfolio-locale'

const SEGMENT_TO_LOCALE: Record<string, Locale> = {
  'pt-br': 'pt-BR',
  pt: 'pt-BR',
  en: 'en',
}

function getWindowPathname() {
  return typeof window === 'undefined' ? '/' : window.location.pathname
}

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'pt-BR' || stored === 'en' ? stored : null
  } catch {
    return null
  }
}

export function setStoredLocale(locale: Locale) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // The site still works when storage is blocked.
  }
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  const first = languages.find(Boolean)?.toLowerCase() ?? ''
  return first.startsWith('pt') ? 'pt-BR' : 'en'
}

export function getPreferredLocale(): Locale {
  return getStoredLocale() ?? detectBrowserLocale()
}

export function getPathLocale(pathname = getWindowPathname()): Locale | null {
  const firstSegment = normalizePathname(pathname).split('/').filter(Boolean)[0]?.toLowerCase()
  return firstSegment ? SEGMENT_TO_LOCALE[firstSegment] ?? null : null
}

export function getCurrentLocale(pathname = getWindowPathname()): Locale {
  return getPathLocale(pathname) ?? getPreferredLocale()
}

export function stripLocaleFromPath(pathname = getWindowPathname()) {
  const normalized = normalizePathname(pathname)
  const parts = normalized.split('/').filter(Boolean)
  if (parts.length === 0) return '/'

  const firstLocale = SEGMENT_TO_LOCALE[parts[0].toLowerCase()]
  const withoutLocale = firstLocale ? parts.slice(1) : parts
  if (withoutLocale.length === 0) return '/'

  const path = `/${withoutLocale.join('/')}`
  if (path === '/projects') return '/projetos'
  if (path.startsWith('/projects/')) return path.replace(/^\/projects/, '/projetos')
  if (path === '/links') return '/links-contatos'
  return path
}

function localizeInternalPath(pathname: string, locale: Locale) {
  const internalPath = stripLocaleFromPath(pathname)
  const prefix = `/${LOCALE_SEGMENTS[locale]}`

  if (internalPath === '/') return prefix
  if (internalPath === '/projetos') return locale === 'en' ? `${prefix}/projects` : `${prefix}/projetos`
  if (internalPath.startsWith('/projetos/')) {
    const projectId = internalPath.replace(/^\/projetos\//, '')
    return locale === 'en' ? `${prefix}/projects/${projectId}` : `${prefix}/projetos/${projectId}`
  }
  if (internalPath === '/links-contatos') return locale === 'en' ? `${prefix}/links` : `${prefix}/links-contatos`

  return `${prefix}${internalPath}`
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  return localizeInternalPath(pathname, locale)
}

export function getLocalizedHref(href: string, locale = getCurrentLocale()) {
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) {
    if (href.startsWith('#')) return `${getLocalizedPath('/', locale)}${href}`
    return href
  }

  const [pathname, hash] = href.split('#')
  return `${getLocalizedPath(pathname || '/', locale)}${hash ? `#${hash}` : ''}`
}

export function getLocalizedCurrentPath(locale: Locale) {
  if (typeof window === 'undefined') return getLocalizedPath('/', locale)

  return `${getLocalizedPath(window.location.pathname, locale)}${window.location.hash}`
}

export function getRouteInfo(pathname = getWindowPathname()) {
  const locale = getCurrentLocale(pathname)
  const explicitLocale = getPathLocale(pathname)
  const internalPath = stripLocaleFromPath(pathname)

  return {
    locale,
    explicitLocale,
    internalPath,
  }
}
