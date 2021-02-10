const { app, BrowserWindow } = require("electron");
function createWindow() {
  try {
    require("electron-reloader")(module);
  } catch (_) {}

  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.removeMenu();
  win.loadFile("index.html");
}
app.on("ready", createWindow);
