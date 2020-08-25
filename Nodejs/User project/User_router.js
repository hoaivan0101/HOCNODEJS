const express = require('express');
const router = express.Router();
const Listusers = [{name: 'van', email: 'hvan', id: 1},
  {name: 'User2', email: '27', id: 2}];

router.get('/', function(req, res) {
  res.render('Login');
});

router.get('/Users', function(req, res) {
  res.render('ShowUsers', {Users: Listusers});
});

router.get('/SearchUsers', function(req, res) {
  const result = Listusers.filter(function(index) {
    return index.name.indexOf(req.query.d) !== -1;
  });
  res.render('SearchUsers', {Users: result});
});

router.get('/Users/:id', function(req, res) {
  const result = Listusers.find(function(index) {
    return index.id == req.params.id;
  });
  res.render('Show', {Users: result});
});

router.get('/CreateUsers', function(req, res) {
  res.render('Create');
});

router.post('/CreateUsers/', function(req, res) {
  // Error
  const errors = [];
  if (!req.body.name) {
    errors.push('Name is require!');
  }
  if (!req.body.email) {
    errors.push('Email is require!');
  }
  if (!req.body.id) {
    errors.push('Id is require!');
  }
  if (errors.length) {
    res.render('Create', {Erros: errors});
    return;
  }
  // Error
  Listusers.push(req.body);
  res.redirect('Users');
});

module.exports = router;
