// electron development environment
import type { Plugin } from "vite";
import type { AddressInfo } from "net";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import fs from "node:fs";
import { buildBackground } from './utils'
let electronProcess: ChildProcessWithoutNullStreams | undefined = undefined;

function startProcess(url: string) {
  /** eslint-disable-next-line @typescript-eslint/no-require-imports @typescript-eslint/no-var-requires */
  electronProcess = spawn(require("electron"), ['dist/background.js', url])
}

export default function ElectionDevPlugin(): Plugin {
  return {
    name: "electron-dev-plugin",
    configureServer(server) {
      buildBackground('src/background.ts', 'dist/background.js')
      buildBackground('src/preload.ts', 'dist/preload.js')

      server.httpServer?.once("listening", () => {
        const address = server.httpServer?.address() as AddressInfo;
        const url = `http://localhost:${address.port}`
        startProcess(url)
        fs.watchFile('plugins/electron/background.ts',async function () {
          await electronProcess?.kill()
          buildBackground('src/background.ts', 'dist/background.js')
          buildBackground('src/preload.ts', 'dist/preload.js')
          startProcess(url)
        })
      })
    }
  }
}
