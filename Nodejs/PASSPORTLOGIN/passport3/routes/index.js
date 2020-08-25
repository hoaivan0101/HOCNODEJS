const express = require('express');
const router = express.Router();
const users = require('../data/data');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/login', function(req, res) {
  res.render('login');
});


passport.use(
    new LocalStrategy(function(username, password, done) {
      users.findOne({
        username: username,
        password: password,
      })
          .then((data)=>{
            if (!data) {
              done(null, false);
            };
            done(null, data);
          })
          .catch((err) =>{
            done(err);
          });
    }),
);

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(500).json('username pass k hop le');
    }
    if (user) {
      res.json(user);
    }
  })(req, res, next);
});

module.exports = router;
