const express = require('express');
const app = express();
const user_router = require('./user_router');
const todo_router = require('./todo_router');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use('/Todo', todo_router);
app.use('/User', user_router);


app.listen(8080);
