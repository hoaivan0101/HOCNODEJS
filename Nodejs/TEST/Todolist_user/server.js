const express=require('express');
const app = express();
const path = require('path');
const userRouter = require('./router/user');
const jobRouter = require('./router/job');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true}));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use('/user', userRouter);
app.use('/job', jobRouter);

app.listen(3000);
