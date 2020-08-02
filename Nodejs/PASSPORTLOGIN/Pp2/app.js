var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var AccountModel = require('./data/data')
var jwt =require('jsonwebtoken')

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/',function(req,res){
  res.sendfile('mauClient.html')
})

passport.use(new LocalStrategy(
    function(username, password, done) {
        //logic username , 
        AccountModel.findOne({
          username: username,
          password: password
        }).then(data=>{
          console.log('DATA',data);
          if(!data) done(null, false)
  
          done(null, data)
        })
        .catch(err=>{
          done(err)
        })
    }
  ));
  
  app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) { return res.status(500).json('loi server') }
      if (!user) { return res.status(500).json('username pass k hop le') }
  
      if(user){
        jwt.sign(user.toObject(), '123', function(err, token){
          if(err) return res.status(500).json('loi server')
    
          return res.json(token)
        })
      }
      
    })(req, res, next);
  });


  app.get('/private', (req, res, next)=>{
    var token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, '123', function(err, data){
      if(err) return res.status(403).json('Invalid token')
  
      next()
    })
  
  },  (req, res, next)=>{
    res.json('Du lieu bi mat')
  })


// _______________________________________________

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
