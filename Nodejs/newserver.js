const express = require('express')
const app = express()
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'public')))

var pathserver = path.join(__dirname,'index.html')
app.get('/', function (req, res) {

  res.sendfile(pathserver)
})

app.get('/users',function (req,res){
  res.sendfile(path.join(__dirname,'users.html'))
})

app.get('/clients',function (req,res){
  res.send('<h1>HTML</h1><a href="./">Back</a>')
})

var user = [
	{name: "User1", email: "user1@gmail.com"}, 
	{name: "User2", email: "user2@gmail.com"}
];

app.get('/pug',function(req,res){
  res.render('index.pug',{pug: user})
  console.log(req.query.name);
})

app.listen(3000);
