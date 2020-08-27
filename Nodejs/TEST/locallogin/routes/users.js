const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const User = require('../data/account');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

router.use(require('cookie-parser')());
router.use(passport.initialize());
router.use(passport.session());
router.use(
    require('express-session')({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({
        username: username,
        password: password,
      })
          .then((data) => {
            if (!data) {
              done(null, false);
            } else {
              done(null, data);
            }
          })
          .catch((err) => {
            done(err);
          });
    }),
);

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    console.log(user);
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

module.exports = router;
