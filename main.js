const { app, BrowserWindow } = require('electron')

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Woovies",
    width: 500,
    height: 600,
    resizable: false
  })
}

app.on('ready', createMainWindow)
