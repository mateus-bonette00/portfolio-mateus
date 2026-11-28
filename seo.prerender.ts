import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { getLocalizedPath } from './src/i18n/routes'
import { applySeoToHtml } from './src/seo/html'
import { listPublicInternalPaths, resolveSeoPage } from './src/seo/model'
import { buildLlmsProjectSection, buildSitemapXml } from './src/seo/sitemap'

export function prerenderSeo(options: { outDir: string; publicDir: string; buildDate: string }) {
  const indexHtml = readFileSync(path.join(options.outDir, 'index.html'), 'utf8')
  const internalPaths = listPublicInternalPaths()
  const locales = ['pt-BR', 'en'] as const

  for (const internalPath of internalPaths) {
    for (const locale of locales) {
      const pathname = getLocalizedPath(internalPath, locale)
      const page = resolveSeoPage(pathname, options.buildDate)
      const html = applySeoToHtml(indexHtml, page)
      const dir = path.join(options.outDir, ...pathname.split('/').filter(Boolean))
      mkdirSync(dir, { recursive: true })
      writeFileSync(path.join(dir, 'index.html'), html)
      if (locale === 'pt-BR' && internalPath === '/') {
        writeFileSync(path.join(options.outDir, 'index.html'), html)
      }
    }
  }

  const sitemap = buildSitemapXml(internalPaths, options.buildDate)
  writeFileSync(path.join(options.outDir, 'sitemap.xml'), sitemap)
  writeFileSync(path.join(options.publicDir, 'sitemap.xml'), sitemap)

  const projectPaths = internalPaths.filter((item) => item.startsWith('/projetos/'))
  const llmsPath = path.join(options.publicDir, 'llms.txt')
  const currentLlms = readFileSync(llmsPath, 'utf8')
  const section = buildLlmsProjectSection(projectPaths)
  const marker = '\n## Project pages'
  const markerAt = currentLlms.indexOf(marker)
  const stripped = (markerAt >= 0 ? currentLlms.slice(0, markerAt) : currentLlms).trimEnd()
  const nextLlms = `${stripped}\n${section}`
  writeFileSync(llmsPath, nextLlms)
  writeFileSync(path.join(options.outDir, 'llms.txt'), nextLlms)
}
