import type { Locale } from '../i18n/routes'

export const SITE_ORIGIN = 'https://www.mateusbonette.com.br'
export const SITE_NAME = 'Mateus Bonette'
export const PERSON_ID = `${SITE_ORIGIN}/#person`
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`
export const PROFILE_IMAGE_PATH = '/images/mateus-bonette-profile.jpg'
export const PROFILE_IMAGE_URL = `${SITE_ORIGIN}${PROFILE_IMAGE_PATH}`
export const SITE_LAUNCH_DATE = '2026-05-04'

export const SAME_AS = [
  'https://www.linkedin.com/in/mateus-bonette/',
  'https://github.com/mateus-bonette00',
  'https://www.instagram.com/mateus_bonette/',
] as const

export function localeHtmlLang(locale: Locale) {
  return locale === 'en' ? 'en' : 'pt-BR'
}

export function localeOg(locale: Locale) {
  return locale === 'en' ? 'en_US' : 'pt_BR'
}

export function localeOgAlternate(locale: Locale) {
  return locale === 'en' ? 'pt_BR' : 'en_US'
}

export function absoluteUrl(pathname: string) {
  if (pathname.startsWith('http')) return pathname.split('?')[0]
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE_ORIGIN}${path}`
}

export function assetUrl(src?: string) {
  if (!src || typeof src !== 'string') return PROFILE_IMAGE_URL
  if (src.startsWith('http://') || src.startsWith('https://')) return src.split('?')[0]
  if (src.startsWith('/')) return `${SITE_ORIGIN}${src.split('?')[0]}`
  return PROFILE_IMAGE_URL
}

export function getBuildDate() {
  const fromEnv = import.meta.env?.VITE_BUILD_DATE
  if (typeof fromEnv === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(fromEnv)) return fromEnv
  return new Date().toISOString().slice(0, 10)
}
