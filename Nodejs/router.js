const express = require('express');
const app = express();
const router = require('./Apirouter');
app.get('/', function(req, res) {
  res.send('HTML');
});
app.use('/router/', router);
app.listen(3000);
