/* eslint-disable no-unused-vars */
const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/public', express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    socket.broadcast.emit('chat message', msg);
  });
});

// ROOMMMMMMMMMMMMMMMMMMMMM

http.listen(3000, function() {
  console.log('listening on *:3000');
});
