var express = require('express');
var router = express.Router();
var passport = require('passport');
const localStrategy = require('passport-local').Strategy;
var datas = require('../data/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res,next){
  datas.find()
  .then(resu =>{
      res.render('login',{data:resu})
  })
})

router.get('/signup',function(req,res,next){
  res.render('signup')
})

passport.use(new localStrategy(
  (username, password, done) => {
      if(username == 'user') { 
          if (password == 12345) { 
              return done(null, username); 
          } else {
              return done(null, false); 
          }
      } else {
          return done(null, false); 
      }
  }
))
module.exports = router;
