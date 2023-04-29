import { Menu, Tray, shell } from 'electron'
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )

  const contextMenu = Menu.buildFromTemplate([
    { label: 'quit', role: 'quit' },
    { type: 'separator' },
    { label: 'feedback', click: () => shell.openExternal('https://github.com/kewen645') }
  ])

  tray.setToolTip('Camera Application Tray')
  tray.setContextMenu(contextMenu)
}

export { createTray }
