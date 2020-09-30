/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const http = require('http').createServer(router);
const io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

module.exports = router;
