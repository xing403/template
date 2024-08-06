import { vitePluginFakeServer } from "vite-plugin-fake-server";

export default function useMock(mode: string, enable = true) {
  return vitePluginFakeServer({
    enableDev: mode === 'development' && enable,
    enableProd: false,
    include: 'src/mock',
    infixName: false,
  })
}
