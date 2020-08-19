var express = require("express");
var router = express.Router();
var data = require("../data/userdata");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

passport.session()
router.use(passport.initialize());
router.use(passport.session());


/* GET home page. */
router.get("/", function (req, res, next) {
  data.find()
  .then((data) => {
    res.render("index",{data:data});
  });
});

router.get("/login", function (req, res) {
  res.render("login");
});

passport.serializeUser(function(user,done){
  done(null,user)
})

passport.use(new LocalStrategy(function(username,password,done){
  data.findOne({
    username:username,
    password:password
  })
    .then(data=>{
      if (!data){return done(null,false)}
      return done(null,data)
    })
    .catch(err=>{
      done(err)
    })
}))


router.post('/login',function(req,res,next){
    passport.authenticate('local',function(err,user){
     if (err){res.status(500).json('SERVER ERR')}
     if (!data){res.status(500).json('ACCOUNT NOT FOUND')}
     req.logIn(user,function(err){
       if (err){res.redirect('/login')}
       res.json(user)
     })
    })
    (req,res,next)
})

module.exports = router;
