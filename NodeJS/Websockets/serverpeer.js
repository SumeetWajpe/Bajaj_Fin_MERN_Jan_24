const socket = require("socket.io");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("ClientPeer.html", { root: __dirname });
});

const server = app.listen(3000, () =>
  console.log(`Server running @ port 3000 !`),
);
const io = socket(server);
io.sockets.on("connection", skt => {
  setInterval(() => {
    var date = new Date();
    skt.emit("custom_msg_from_server_peer", date.toString());
  }, 2000);
});
