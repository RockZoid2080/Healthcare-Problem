const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    // Handle WebSocket messages for signaling between peers (offer, answer, ICE candidates, etc.).
    ws.on('message', (message) => {
        // Process and relay the message to the appropriate peer.
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});