const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4001;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const bodyParser = require("body-parser");
const socketio = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// const io = socketio(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//const io = socketIo(server); // < Interesting!

app.get("/", (req, res) => {
  res.send("GG");
});

socketio.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("Message", (mes) => {
    console.log("message: \n" + mes);
    payload = JSON.parse(mes);
    socket.broadcast.emit("new message", payload);
  });

  socket.on("new password", (payload, ack) => {
    console.log("message: \n" + payload);
    ack("");
    socket.broadcast.emit("Password", payload);
    socket.broadcast.emit("Authenticated", true);
  });

  socket.on("new mode", (payload, ack) => {
    console.log("message: \n" + payload);
    ack(payload);
    socket.broadcast.emit("Mode", payload);
  });

  socket.on("Authentication", (payload) => {
    console.log("message: \n" + payload);
    socket.broadcast.emit("authentication", payload);
  });
  socket.on("Authenticated", (payload) => {
    console.log("message: \n" + payload);
    //TODO: change the emitted value
    if (payload === "True" || payload === true) {
      socket.broadcast.emit("Authenticated", true);
    } else if (payload === "False" || payload === false) {
      socket.broadcast.emit("Authenticated", false);
    } else {
      socket.broadcast.emit("Authenticated", false);
    }
  });

  socket.on("Logged Out", (payload) => {
    console.log("message: \n" + payload);
    //TODO: change the emitted value
    socket.broadcast.emit("Logged Out", false);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
