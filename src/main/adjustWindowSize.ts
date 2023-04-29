import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

// 获取触发事件的窗口
const getWindow = (event: IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

ipcMain.on(
  'adjustWindowSize',
  (event: IpcMainEvent, options: { aspectRatio: number; width?: number; height?: number }) => {
    const wipWindow = getWindow(event)
    wipWindow.setAspectRatio(options.aspectRatio)
    options.aspectRatio === 1
      ? wipWindow.setBounds({ width: 350, height: 350 })
      : wipWindow.setBounds({ width: 500, height: 280 })
  }
)
