const express = require('express');
const app = express();
const session = require('express-session');

app.use(
    session({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
);

app.get('/', function(req, res) {
  const token = '12345';
  req.session.token = token;
  res.sendfile('index.html');
});

app.get('/login', function(req, res) {
  console.log(req.session);
  res.json('ABC');
});

app.listen(3000);
