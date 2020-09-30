/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const AccountModel = require('../data/data');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');

router.use(
    require('express-session')({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
);

router.use(express.json());
router.use(express.urlencoded({extended: true}));

module.exports = {
  passportuse: function() {
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
  },

  passportauthenticate: function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return res.status(500).json(err);
      }
      if (!user) {
        return res.status(500).json('ACCOUNT KHONG DUNG');
      }
      if (user) {
        res.json(user);
      }
    })(req, res, next);
  },
  passportserializeUser: function() {
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
  },
  passportDeserializeUser: function() {
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
  },
};

// /////////////////////////////////////
