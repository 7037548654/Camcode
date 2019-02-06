const electron = require('electron');
const url = require('url');
const path = require('path');

const{app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready

app.on('ready', function(){
  // create new window
  mainWindow = new BrowserWindow({});
  // Load Html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file',
    slashes: true
  }));
});
