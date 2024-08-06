// electron entry point
const { app, BrowserWindow, Menu } = require('electron');
const { createShortcut } = require('./electron/shortcut');
const { ContextMenu, CustomMenu } = require('./electron/menu');
const createTray = require('./electron/tray');
const WinState = require('electron-win-state');

import path from 'path'

const winState = new WinState({
  defaultWidth: 800,
  defaultHeight: 600,
})
const createWindow = (config?: Electron.BrowserWindowConstructorOptions) => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    ...config,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
    },
  });

  winState.manage(win)

  const customMenu = Menu.buildFromTemplate(CustomMenu((args: any) => {  // 自定义顶部菜单
    win.webContents.send('main-output', args)
  }))

  const contextMenu = Menu.buildFromTemplate(ContextMenu()) // 自定义右键菜单
  win.webContents.on('context-menu', () => {
    contextMenu.popup()
  });
  Menu.setApplicationMenu(customMenu)
  return win
}
app.whenReady().then(() => {
  const mainWindow = createWindow()

  createTray(mainWindow)
  createShortcut(mainWindow)

  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])  // 开发环境
  } else {
    mainWindow.loadFile('index.html')  // 生产环境
  }
})



