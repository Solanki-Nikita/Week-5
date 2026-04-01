import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 3000});

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (data) => {
        const message = JSON.parse(data);

        if(message.typw === "chat"){
            wss.clients.forEach((client) => {
               if (client .readyState === 1){
                client.send(JSON.stringify({
                    type: "chat",
                    payload: message.payload
                }));
               }
            });
        }
    });

    ws.on("closw", () => {
        console.log("Client disconnected");
    });
});
console.log ("Server running on ws://localhost:3000");