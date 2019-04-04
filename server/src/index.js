const app = require("express")();
const http = require("http").Server(app);
const ws = require("socket.io")(http);
const MessageStore = require("./MessageStore");

const messages = new MessageStore();

ws.on("connection", connection => {
  // A new user has connected
  console.log(`User ${connection.id} connected`);
  connection.emit("allMessages", messages.getAll());

  // The user has disconnected
  connection.on("disconnect", () => {
    console.log(`User ${connection.id} disconnected.`);
  });

  // The user has sent a message
  connection.on("clientMessage", payload => {
    const newMsg = messages.append(payload);
    ws.emit("serverMessage", newMsg);
  });
});

http.listen(4000, () => {
  console.log("Listening on localhost:4000");
});
