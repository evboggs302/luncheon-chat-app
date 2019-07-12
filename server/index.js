const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.sockets.on("connection", socket => {
  console.log(socket.id);

  //   https://socket.io/docs/emit-cheatsheet/

  socket.on("message", userMessage => {
    const { username, message } = userMessage;
    io.emit("message", `${username} | ${message}`);
  });
});

const PORT = 4000;
// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
