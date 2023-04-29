import { ipcMain, Menu, MenuItemConstructorOptions, shell } from 'electron'

// 右键退出事件
ipcMain.on('contextMenu', () => {
  const template = [
    {
      label: 'Quit',
      role: 'quit'
    },
    {
      label: 'Visit Me',
      click: () => shell.openExternal('https://github.com/kewen645')
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
