const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const config = require(path.join(__dirname, 'package.json'))

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'Index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)