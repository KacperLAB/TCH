'use strict';

const express = require('express');
var os = require("os");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  var hostname = os.hostname();
  res.send("Adres serwera: " + ipAddress + "\nHostname: " + hostname + "\nWersja: " + process.env.VER + "\n");
  //res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});