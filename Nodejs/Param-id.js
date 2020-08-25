const express = require('express');
const app = express();
const Listusers = [{name: 'van', email: 'hvan', id: 1},
  {name: 'User2', email: '27', id: 2}];

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('Start');
});

app.get('/Users', function(req, res) {
  res.render('Users', {Users: Listusers});
});

app.get('/FindUsers', function(req, res) {
  const Result = Listusers.filter(function(index) {
    return index.name.indexOf(req.query.d)!==-1;
  });
  res.render('FindUsers', {Users: Result});
});

// -------------------- GET ID
app.get('/Users/:idt', function(req, res) {
  const result = Listusers.find(function(index) {
    return index.id == req.params.idt;
  });
  res.render('Show', {Users: result});
});
// ---------------------

app.get('/CreateUsers', function(req, res) {
  res.render('CreateUsers');
});

// ------------- Body - POST
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));

app.post('/CreateUsers', function(req, res) {
  Listusers.push(req.body);
  res.redirect('/Users');
});

// ------------------------

app.listen(3000);
