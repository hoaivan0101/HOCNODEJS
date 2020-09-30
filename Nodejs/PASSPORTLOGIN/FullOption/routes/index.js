/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const AccountModel = require('../data/data');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

router.use(
    require('express-session')({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
);

router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/fb', function(req, res) {
  res.render('fblogin');
});

// LOCAL
passport.use(
    new LocalStrategy(function(username, password, done) {
      AccountModel.findOne({
        username: username,
        password: password,
      })
          .then((data) => {
            if (!data) {
              done(null, false);
            }
            console.log(data);
            done(null, data);
          })
          .catch((err) => {
            done(null, err);
          });
    }),
);

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(500).json('ACCOUNT KHONG DUNG');
    }
    if (user) {
      req.login(user, function(user) {
        res.json(user);
      });
    }
  })(req, res, next);
});

// FACEBOOK

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  AccountModel.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
    new FacebookStrategy(
        {
          clientID:
        '425336740930-h9n8jfr30vfjl3oknf1a5nb7pvdhj8n8.apps.googleusercontent.com',
          clientSecret: 'gUedMMxR9o2osHsQD8HuW6cp',
          callbackURL: 'http://localhost:3000/auth/facebook/callback',
        },
        function(accessToken, refreshToken, profile, cb) {
          console.log(profile);
          cb(null, profile._json);
        },
    ),
);

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login'}),
    function(req, res) {
      res.render('fblogin');
    },
);

// /////////////////////////////////////
passport.use(
    new GoogleStrategy(
        {
          clientID:
        '425336740930-h9n8jfr30vfjl3oknf1a5nb7pvdhj8n8.apps.googleusercontent.com',
          clientSecret: 'gUedMMxR9o2osHsQD8HuW6cp',
          callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        function(accessToken, refreshToken, profile, cb) {
          AccountModel.findOne({
            googleId: profile.id,
          })
              .then((data) => {
                if (data) {
                  cb(null, data);
                } else {
                  AccountModel.create({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                  }).then((data) => {
                    cb(null, data);
                  });
                }
              })
              .catch((err) => {
                console.log('ERRRRRRRRRRRRRRRRRRRR');
                cb(err);
              });
        },
    ),
);

router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']}),
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
      console.log('sessionnnnnnnnnnnn', req.user);
      res.redirect('/');
    },
);

module.exports = router;
