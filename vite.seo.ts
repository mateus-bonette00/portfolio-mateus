import { existsSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { build as esbuildBuild } from 'esbuild'
import type { Plugin } from 'vite'

const BUILD_DATE = new Date().toISOString().slice(0, 10)

export function seoPrerenderPlugin(): Plugin[] {
  let outDir = ''
  let projectRoot = ''

  const buildPlugin: Plugin = {
    name: 'seo-prerender',
    apply: 'build',
    config() {
      return {
        define: {
          'import.meta.env.VITE_BUILD_DATE': JSON.stringify(BUILD_DATE),
        },
      }
    },
    configResolved(config) {
      projectRoot = path.resolve(config.root, '..')
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const outfile = path.join(tmpdir(), `portfolio-seo-prerender-${process.pid}.mjs`)
      await esbuildBuild({
        absWorkingDir: projectRoot,
        entryPoints: [path.join(projectRoot, 'seo.prerender.ts')],
        outfile,
        bundle: true,
        format: 'esm',
        platform: 'node',
        target: 'node18',
        logLevel: 'warning',
        packages: 'external',
        loader: {
          '.png': 'empty',
          '.jpg': 'empty',
          '.jpeg': 'empty',
          '.webp': 'empty',
          '.gif': 'empty',
          '.mp4': 'empty',
          '.svg': 'empty',
          '.css': 'empty',
        },
      })
      try {
        const mod = (await import(pathToFileURL(outfile).href)) as {
          prerenderSeo: (options: { outDir: string; publicDir: string; buildDate: string }) => void
        }
        mod.prerenderSeo({
          outDir,
          publicDir: path.join(projectRoot, 'public'),
          buildDate: BUILD_DATE,
        })
      } finally {
        try {
          unlinkSync(outfile)
        } catch {
          /* ignore temp cleanup */
        }
      }
    },
  }

  const previewSlashPlugin: Plugin = {
    name: 'seo-preview-slash',
    configurePreviewServer(server) {
      const previewOutDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (!url || url === '/' || url.endsWith('/') || path.extname(url)) {
          next()
          return
        }
        if (existsSync(path.join(previewOutDir, url, 'index.html'))) {
          res.statusCode = 301
          res.setHeader('Location', `${url}/`)
          res.end()
          return
        }
        next()
      })
    },
  }

  return [buildPlugin, previewSlashPlugin]
}
