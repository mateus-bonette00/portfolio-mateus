import type { Locale } from '../i18n/routes'

export type SeoKind = 'home' | 'projects' | 'project' | 'links'

export type SeoPage = {
  kind: SeoKind
  locale: Locale
  path: string
  title: string
  description: string
  canonical: string
  hreflang: Array<{ lang: string; href: string }>
  ogType: 'website' | 'profile'
  ogImage: string
  ogImageAlt: string
  ogLocale: string
  ogLocaleAlternate: string
  jsonLd: unknown
  bodyHtml: string
  robots: string
  buildDate: string
}
