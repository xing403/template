// Electron production environment
import type { Plugin } from "vite";
import * as ElectronBuilder from 'electron-builder'
import fs from "node:fs";
import path from "path";
import { buildBackground } from "./utils";
import pkg from "../../package.json";
export default function ElectronBuildPlugin(): Plugin {
  return {
    name: 'electron-build-plugin',
    closeBundle() {
      buildBackground('src/background.ts', 'dist/background.js')
      buildBackground('src/preload.ts', 'dist/preload.js')

      fs.writeFileSync(fs.openSync('dist/package.json', 'w'), JSON.stringify(pkg))
      fs.mkdirSync('dist/node_modules') // 阻止 electron-builder 下载垃圾文件

      ElectronBuilder.build({
        config: {
          appId: 'com.electron.app',
          productName: pkg.name ?? 'vue-electron',
          directories: {
            output: path.resolve(process.cwd(), 'release'),
            app: path.resolve(process.cwd(), 'dist')
          },
          files: ['**/*'],
          asar: true,
          nsis: {
            oneClick: false, // 取消一键安装操作
            allowToChangeInstallationDirectory: true, // 允许用户自定义安装目录
          }
        }
      })
    }
  }
}
