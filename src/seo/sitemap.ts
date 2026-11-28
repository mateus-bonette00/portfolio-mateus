import { getLocalizedPath, type Locale } from '../i18n/routes'
import { absoluteUrl } from './site'
import { escapeHtml } from './text'

function priorityFor(internalPath: string, locale: Locale) {
  if (internalPath === '/') return locale === 'pt-BR' ? '1.0' : '0.95'
  if (internalPath === '/projetos') return locale === 'pt-BR' ? '0.9' : '0.85'
  if (internalPath === '/links-contatos') return '0.6'
  return locale === 'pt-BR' ? '0.8' : '0.75'
}

export function buildSitemapXml(internalPaths: string[], lastmod: string) {
  const locales: Locale[] = ['pt-BR', 'en']
  const body = internalPaths
    .flatMap((internalPath) => {
      const pt = getLocalizedPath(internalPath, 'pt-BR')
      const en = getLocalizedPath(internalPath, 'en')
      const changefreq = internalPath === '/' || internalPath === '/projetos' ? 'weekly' : 'monthly'
      return locales.map((locale) => {
        const loc = getLocalizedPath(internalPath, locale)
        return `  <url>
    <loc>${escapeHtml(absoluteUrl(loc))}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${escapeHtml(absoluteUrl(pt))}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeHtml(absoluteUrl(en))}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(absoluteUrl(pt))}" />
    <changefreq>${changefreq}</changefreq>
    <priority>${priorityFor(internalPath, locale)}</priority>
  </url>`
      })
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${body}
</urlset>
`
}

export function buildLlmsProjectSection(internalProjectPaths: string[]) {
  return [
    '',
    '## Project pages',
    '',
    `- PT-BR listing: ${absoluteUrl('/pt-br/projetos')}`,
    `- EN listing: ${absoluteUrl('/en/projects')}`,
    ...internalProjectPaths.flatMap((internalPath) => {
      const id = internalPath.replace('/projetos/', '')
      return [
        `- ${id} (PT-BR): ${absoluteUrl(getLocalizedPath(internalPath, 'pt-BR'))}`,
        `- ${id} (EN): ${absoluteUrl(getLocalizedPath(internalPath, 'en'))}`,
      ]
    }),
    '',
  ].join('\n')
}
