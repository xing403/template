/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import useVitePlugins from './vite/plugins'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: useVitePlugins(),

  test: {
    environment: 'jsdom',
  },
})
