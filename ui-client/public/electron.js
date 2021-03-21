const electron = require("electron");
const { app, BrowserWindow } = electron;
const url = `file://${path.join(
  __dirname,
  "../build/static/css/main.409ba30b.chunk.css"
)}`;

let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    title: "الأمين 108",
    webPreferences: {
      webSecurity: false,
    },
  });
  // mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  // mainWindow.loadURL(
  //   isDev
  //     ? `file://${path.join(__dirname, "../build/index.html")}`
  //     : "http://localhost:3000"
  // );
  mainWindow.loadURL("http://localhost:3001");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
}
