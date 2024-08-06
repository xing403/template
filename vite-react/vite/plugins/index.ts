import react from '@vitejs/plugin-react-swc'
import useAutoImport from './auto-import'
import useMock from './mock'
import useUnoCSS from './unocss'
import { PluginOption } from 'vite'
export default function useVitePlugins(mode: string, openMock: boolean) {
  const plugins: (PluginOption | PluginOption[])[] = [react()]

  plugins.push(useAutoImport())
  plugins.push(useMock(mode, openMock))
  plugins.push(useUnoCSS())

  return plugins
}
