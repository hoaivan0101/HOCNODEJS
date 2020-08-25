const express = require('express');
const app = express();

const path = require('path');

const pathPublic = path.join(__dirname, 'public');

app.use('/public', express.static(pathPublic));

app.get('/', function(req, res) {
  const duongdan = path.join(__dirname, 'index.html');
  res.sendFile(duongdan);
  // res.send(path.join(__dirname,'/text.txt'))
});
app.listen(3000);

