import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { PROPOSALS } from './src/data/proposals'
import type { Proposal } from './src/types/proposal'

const SITE = 'https://mateusbonette.com.br'
const PATH_PREFIXES = ['', '/pt-br']

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function shareMeta(proposal: Proposal) {
  return {
    title: `Proposta ${proposal.clientLabel}`,
    description: proposal.heroDescription,
  }
}

function replaceMeta(html: string, kind: 'name' | 'property', key: string, value: string) {
  const encoded = escapeAttr(value)
  const re = new RegExp(`(<meta\\s+${kind}="${key}"\\s+content=")[^"]*(")`, 'i')
  if (re.test(html)) return html.replace(re, `$1${encoded}$2`)
  return html.replace('</head>', `    <meta ${kind}="${key}" content="${encoded}" />\n  </head>`)
}

function applyShareTags(html: string, title: string, description: string, url: string) {
  let next = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
  next = replaceMeta(next, 'name', 'description', description)
  next = replaceMeta(next, 'property', 'og:title', title)
  next = replaceMeta(next, 'property', 'og:description', description)
  next = replaceMeta(next, 'property', 'og:url', url)
  next = replaceMeta(next, 'name', 'twitter:title', title)
  next = replaceMeta(next, 'name', 'twitter:description', description)
  return next
}

export function proposalOgPlugin(): Plugin {
  let outDir = ''

  return {
    name: 'proposal-og',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexHtml = readFileSync(path.join(outDir, 'index.html'), 'utf8')

      for (const proposal of Object.values(PROPOSALS)) {
        const { title, description } = shareMeta(proposal)
        for (const prefix of PATH_PREFIXES) {
          const urlPath = `${prefix}/proposta/${proposal.slug}`
          const dir = path.join(outDir, ...urlPath.split('/').filter(Boolean))
          mkdirSync(dir, { recursive: true })
          writeFileSync(
            path.join(dir, 'index.html'),
            applyShareTags(indexHtml, title, description, `${SITE}${urlPath}`),
          )
        }
      }
    },
  }
}
