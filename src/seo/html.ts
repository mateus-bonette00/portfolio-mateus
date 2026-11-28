import { localeHtmlLang } from './site'
import { escapeHtml } from './text'
import type { SeoPage } from './types'

function replaceTitle(html: string, title: string) {
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  }
  return html.replace('</head>', `    <title>${escapeHtml(title)}</title>\n  </head>`)
}

function upsertMeta(html: string, kind: 'name' | 'property', key: string, value: string) {
  const encoded = escapeHtml(value)
  const re = new RegExp(`(<meta\\s+${kind}="${key}"\\s+content=")[^"]*(")`, 'i')
  if (re.test(html)) return html.replace(re, `$1${encoded}$2`)
  return html.replace('</head>', `    <meta ${kind}="${key}" content="${encoded}" />\n  </head>`)
}

function upsertLink(html: string, rel: string, href: string, extra = '') {
  const encoded = escapeHtml(href)
  const re = new RegExp(`<link\\s+rel="${rel}"[^>]*>`, 'i')
  const tag = extra
    ? `<link rel="${rel}" ${extra} href="${encoded}" />`
    : `<link rel="${rel}" href="${encoded}" />`
  if (re.test(html)) return html.replace(re, tag)
  return html.replace('</head>', `    ${tag}\n  </head>`)
}

function replaceHreflang(html: string, page: SeoPage) {
  const without = html.replace(/\s*<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"\s*\/?>/gi, '')
  const tags = page.hreflang
    .map((item) => `    <link rel="alternate" hreflang="${escapeHtml(item.lang)}" href="${escapeHtml(item.href)}" />`)
    .join('\n')
  if (/<link rel="canonical"/i.test(without)) {
    return without.replace(
      /<link rel="canonical"[^>]*>/i,
      `$&\n${tags}`,
    )
  }
  return without.replace('</head>', `${tags}\n  </head>`)
}

function replaceJsonLd(html: string, jsonLd: unknown) {
  const payload = JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c')
  const script = `    <script type="application/ld+json" id="page-jsonld">\n${payload}\n    </script>`
  if (/<script type="application\/ld\+json"[\s\S]*?<\/script>/i.test(html)) {
    return html.replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/i, script.trim())
  }
  return html.replace('</head>', `${script}\n  </head>`)
}

function replaceRootInner(html: string, inner: string) {
  const match = html.match(/<div id="root"[^>]*>/i)
  if (!match || match.index === undefined) return html
  const startTag = match[0]
  const start = match.index
  const contentStart = start + startTag.length
  let depth = 1
  let i = contentStart
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i)
    const nextClose = html.indexOf('</div>', i)
    if (nextClose === -1) break
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1
      i = nextOpen + 4
    } else {
      depth -= 1
      if (depth === 0) {
        return `${html.slice(0, contentStart)}\n${inner}\n    ${html.slice(nextClose)}`
      }
      i = nextClose + 6
    }
  }
  return html
}

export function applySeoToHtml(html: string, page: SeoPage) {
  let next = html.replace(/<html lang="[^"]*"/i, `<html lang="${localeHtmlLang(page.locale)}"`)
  next = replaceTitle(next, page.title)
  next = upsertMeta(next, 'name', 'description', page.description)
  next = upsertMeta(next, 'name', 'robots', page.robots)
  next = upsertMeta(next, 'property', 'og:type', page.ogType)
  next = upsertMeta(next, 'property', 'og:site_name', 'Mateus Bonette')
  next = upsertMeta(next, 'property', 'og:url', page.canonical)
  next = upsertMeta(next, 'property', 'og:locale', page.ogLocale)
  next = upsertMeta(next, 'property', 'og:locale:alternate', page.ogLocaleAlternate)
  next = upsertMeta(next, 'property', 'og:title', page.title)
  next = upsertMeta(next, 'property', 'og:description', page.description)
  next = upsertMeta(next, 'property', 'og:image', page.ogImage)
  next = upsertMeta(next, 'property', 'og:image:alt', page.ogImageAlt)
  next = upsertMeta(next, 'name', 'twitter:card', 'summary_large_image')
  next = upsertMeta(next, 'name', 'twitter:title', page.title)
  next = upsertMeta(next, 'name', 'twitter:description', page.description)
  next = upsertMeta(next, 'name', 'twitter:image', page.ogImage)
  next = upsertLink(next, 'canonical', page.canonical)
  next = replaceHreflang(next, page)
  next = replaceJsonLd(next, page.jsonLd)
  next = replaceRootInner(next, page.bodyHtml)
  return next
}
