const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

/* START OF THE CODE */

app.use(express.static('public'));

io.on('connection',(socket) => {
    console.log('An user has connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('An user diconected');
    });
});

/* SERVER */

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log('SERVER RUNNING | PORT: ' + PORT);
});