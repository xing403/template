import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-auto-import
export default function createAutoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    dts: 'src/types/auto-import.d.ts',
    dirs: [
      './src/composables',
    ],
    vueTemplate: true,
  })
}
