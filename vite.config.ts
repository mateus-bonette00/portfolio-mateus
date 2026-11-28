import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { proposalOgPlugin } from './vite.proposal-og'
import { seoPrerenderPlugin } from './vite.seo'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ command, isPreview }) => ({
  root: 'app',
  appType: command === 'serve' && !isPreview ? 'spa' : 'mpa',
  plugins: [react(), proposalOgPlugin(), ...seoPrerenderPlugin()],
  publicDir: '../public',
  resolve: {
    alias: {
      '/src': path.resolve(projectRoot, 'src'),
    },
  },
  server: {
    host: true,
    port: 5434,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    fs: {
      allow: [projectRoot],
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
          'simple-icons': ['simple-icons']
        }
      }
    }
  },
  preview: {
    host: true,
    port: 4173,
  },
}))
