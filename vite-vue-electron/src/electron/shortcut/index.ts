// eslint-disable-next-line @typescript-eslint/no-var-requires
const { globalShortcut } = require('electron')

export default function createShortcut(window: Electron.BrowserWindow) {
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    // console.log('CommandOrControl+Shift+I is pressed')
    window.webContents.isDevToolsOpened()
      ? window.webContents.closeDevTools()
      : window.webContents.openDevTools()
  })
}

