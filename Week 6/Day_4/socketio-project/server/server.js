import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Namespace
const chat = io.of("/chat");

chat.on("connection", (socket) => {
  console.log("User connected to /chat");

  // Join room
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`Joined ${room}`);
  });

  // Send message to room
  socket.on("message", ({ room, msg }) => {
    chat.to(room).emit("message", msg);
  });
});

httpServer.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});