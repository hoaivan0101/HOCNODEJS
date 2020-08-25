const express = require('express');
const app = express();
const Users = require('./conectDB');

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  Users.find()
      .then((data) =>{
        res.render('ShowUsers', {Users: data});
      });
});

app.get('/Create', function(req, res) {
  res.render('Create');
});

app.post('/Create', function(req, res) {
  const Err=[];
  if (!req.body.name) {
    Err.push('Error! Input User Name');
  };
  if (!req.body.age) {
    Err.push('Error! Input User age');
  };
  if (Err.length) {
    res.render('Create', {Erros: Err});
    return;
  }
  Users.create(req.body);
  res.redirect('/');
});

app.listen(3000);
