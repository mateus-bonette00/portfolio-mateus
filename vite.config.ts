import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'app',
  plugins: [react()],
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
  }
})
