import express from "express";
import { WebSocketServer } from "ws"; // Import the WebSocketServer class from the "ws" library  

const app = express(); // Create an Express application
const port = 3000;  // You can choose any port you like

// Serve static files from the "public" directory\
const server = app.listen(port, () => {
    console.log ("server is Listening....")
});

// Create WebSocket server on top of the existing HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {      // Listen for new WebSocket connections
    ws.on("message", (data) => {
        console.log("data from client %s : ", data);        // Log the received message from the client
        ws.send("Hello from server");
    });
});