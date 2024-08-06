import AutoImport from 'unplugin-auto-import/vite'

export default function useAutoImport() {
  return AutoImport({
    imports: [
      'react',
      'react-router-dom',
      // https://jotai.org/
      'jotai'
    ],
    dts: 'src/types/auto-import.d.ts',
    dirs: [
      './src/composables',
    ],
  })
}
