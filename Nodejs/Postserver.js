const express =require('express');
const app = express();

const Listusers = [{name: 'van', email: 'hvan'},
  {name: 'User2', email: '27'}];

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.send('<h1>HTML</h1><a href="/Users">Users</a>');
});

app.get('/Users', function(req, res) {
  res.render('Postusers', {Users: Listusers});
});

app.get('/Users/Search', function(req, res) {
  const Result = Listusers.filter(function(index) {
    return index.name.indexOf(req.query.q)!==-1;
  });
  res.render('Postusers', {Users: Result});
});

// <------------------------->//

app.get('/Users/Create', function(req, res) {
  res.render('Create');
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));

app.post('/Users/create', (req, res) => {
  // Listusers.push(req.body);
  Listusers[Listusers.length]=req.body;
  res.redirect('/Users');
});

// <------------------------->//
app.get('/Users/Login', function(req, res) {
  res.render('Login');
});

app.post('/Users/Login', function(req, res) {
  Listusers.push(req.body);
  console.log(req.body);
  res.redirect('/Users');
});

// <----------------------->//

app.listen(3000);
