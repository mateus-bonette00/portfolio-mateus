import { localeHtmlLang } from './site'
import type { SeoPage } from './types'

function upsertMeta(kind: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${kind}="${key}"]`
  let meta = document.querySelector<HTMLMetaElement>(selector)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(kind, key)
    document.head.appendChild(meta)
  }
  meta.content = content
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let link = document.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    if (hreflang) link.hreflang = hreflang
    document.head.appendChild(link)
  }
  link.href = href
}

export function applyDocumentHead(page: SeoPage) {
  document.documentElement.lang = localeHtmlLang(page.locale)
  document.title = page.title
  upsertMeta('name', 'description', page.description)
  upsertMeta('name', 'robots', page.robots)
  upsertMeta('property', 'og:type', page.ogType)
  upsertMeta('property', 'og:site_name', 'Mateus Bonette')
  upsertMeta('property', 'og:url', page.canonical)
  upsertMeta('property', 'og:locale', page.ogLocale)
  upsertMeta('property', 'og:locale:alternate', page.ogLocaleAlternate)
  upsertMeta('property', 'og:title', page.title)
  upsertMeta('property', 'og:description', page.description)
  upsertMeta('property', 'og:image', page.ogImage)
  upsertMeta('property', 'og:image:alt', page.ogImageAlt)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', page.title)
  upsertMeta('name', 'twitter:description', page.description)
  upsertMeta('name', 'twitter:image', page.ogImage)
  upsertLink('canonical', page.canonical)

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove())
  for (const item of page.hreflang) {
    upsertLink('alternate', item.href, item.lang)
  }

  let script = document.getElementById('page-jsonld') as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = 'page-jsonld'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.text = JSON.stringify(page.jsonLd)
}
