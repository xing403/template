// vite plugins
import type { PluginOption } from 'vite'
import Vue from '@vitejs/plugin-vue'
import createComponents from './components'
import createAutoImport from './auto-import'
import createPages from './pages'
import createUnocss from './unocss'

import electronBuild from './electron-build'
import electronDev from './electron-dev'

export default function useVitePlugins() {
  const plugins: (PluginOption | PluginOption[])[] = [Vue()]
  plugins.push(createComponents())
  plugins.push(createPages())
  plugins.push(createAutoImport())
  plugins.push(createUnocss())

  plugins.push(electronBuild())
  plugins.push(electronDev())

  return plugins
}
