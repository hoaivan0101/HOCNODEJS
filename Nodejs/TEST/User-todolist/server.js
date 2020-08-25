const express = require('express');
const app = express();
const Userrouter = require('./user_router');
const Todorouter = require('./todo_router');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use('/Todo', Todorouter);
app.use('/User', Userrouter);

app.listen(8080);
