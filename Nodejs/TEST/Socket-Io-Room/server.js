/* eslint-disable no-var */
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
var Users = [];
io.on('connection', function(socket) {
  var user = {};
  // catch even joinRoom
  socket.on('joinRoom', function(msg) {
    (user.user = msg.user), (user.room = msg.room);
    Users.push(user);
    console.log(Users);

    // join Room

    socket.join(user.room);

    // Send message to user

    socket.emit('message', 'Welcome to ChatCord!');

    // Send message to all user in Room

    socket.broadcast
        .to(user.room)
        .emit('message', `${user.user} has joined the Room`);

    // Send information about user and Room

    io.to(user.room).emit('roomUser', {Arr: Users, user: user.name});
  });

  socket.on('sendMessage', function(msg) {
    socket.to(user.room).emit('message1', msg);
  });

  // LeaveRoom

  socket.on('leaveRoom', function(msg) {
    var indexLeave = Users.findIndex((item) => item.user === msg);
    Users.splice(indexLeave, 1);
    io.to(user.room).emit('roomUser', {Arr: Users, user: user.name});
    socket.broadcast.to(user.room).emit('message', `${msg} has left the Room`);
    socket.leave(user.room);
  });
});

// ROOMMMMMMMMMMMMMMMMMMMMM

http.listen(3000, function() {
  console.log('listening on *:3000');
});
