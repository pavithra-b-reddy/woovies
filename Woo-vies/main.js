const path = require('path');
const os = require('os');

const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');

// Set Environment
process.env.NODE_ENV = 'development';
const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false 

let MainWindow, AboutWindow;

function createMainWindow() {
    MainWindow = new BrowserWindow({
        title: 'Woo-vies', 
        width: isDev ? 1200:400,
        height: 1000,
        icon: './assets/icons/logo.png',
        resizable: isDev,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }

    });

    //if (isDev) {
        //MainWindow.webContents.openDevTools()
    //}

    MainWindow.loadFile('./apps/login.html');
    // EQUIVALENT
    //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
}

function createAboutWindow() {
  AboutWindow = new BrowserWindow({
      title: 'About Woo-vies', 
      width: 300,
      height: 300,
      icon: './assets/icons/logo.png',
      resizable: false,
      backgroundColor: 'black',
      webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
      }
  });

  AboutWindow.loadFile('./apps/about.html');
}

app.on('ready', () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  MainWindow.on('ready', () => MainWindow = null);
});

const menu = [
  ...(isMac ? [{ 
      label: app.name,
      submenu: [
          {
              label: 'About',
              click: createAboutWindow
          },
          { role: 'quit' }
      ]
  }] : []),
  { 
      role: 'fileMenu'
  },
  ...(!isMac ? [
      {
          label: 'About',
          click: createAboutWindow
      }
  ] : []),
  ...(isDev ? [
      { 
          label: 'Developer',
          submenu: [
              { role: 'reload' },
              { role: 'forcereload' },
              { type: 'separator' },
              { role: 'toggledevtools' }
          ]
      }
  ]: [])
];

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })