const { Tray, nativeImage } = require('electron')
const path = require('path')


export default (win: Electron.BaseWindow) => {
  const iconPath = path.join(__dirname, 'icon.png');
  const trayIcon = nativeImage.createFromPath(iconPath);
  const tray = new Tray(trayIcon);
  tray.setToolTip('This is my application.');
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show();
  })
};
