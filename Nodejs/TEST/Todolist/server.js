const express = require('express');
const router = require('./router');
const app = express();
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static(path.join(__dirname, '/public')));
// app.use('/api/public',express.static('public'))

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, 'index.html'));
});

app.use('/api', router);

app.listen(3000);
