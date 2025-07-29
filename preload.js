const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
  test: () => ipcRenderer.invoke('test')
})