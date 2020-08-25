const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const User = require('../data/account');
const passport = require('passport');

router.use(require('cookie-parser')());
router.use(
    require('express-session')({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
);
router.use(passport.initialize());
router.use(passport.session());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({
        username: req.body.username,
        password: req.body.password,
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

router.post(
    '/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    function(req, res) {
      res.redirect('/');
    },
);

module.exports = router;
