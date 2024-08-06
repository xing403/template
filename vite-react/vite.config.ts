import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import useVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default ({ mode, command }: { mode: string, command: string }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: useVitePlugins(mode, env.VITE_OPEN_MOCK === 'true'),
    server: {
      open: true,
      proxy: {
        '/api': {
          target: '/',
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/api/, ''),
        },
        '/mock/api': {
          target: '/',
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  })
}
