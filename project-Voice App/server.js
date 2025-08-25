const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
    socket.on('signal', (data) => {
        socket.broadcast.emit('signal', data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
