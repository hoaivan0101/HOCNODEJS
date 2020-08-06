var express = require("express");
var router = express.Router();
var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var datas = require("../data/data");
var jwt = require("jsonwebtoken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  datas.find().then((resu) => {
    res.render("login", { data: resu });
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    datas
      .findOne({
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
  })
);

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(500).json("username pass k hop le");
    }
    if (user) {
      var token = jwt.sign(user.toObject(), "pass");
      res.json(token);
    }
  })(req, res, next);
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.post("/signup", function (req, res) {
  datas.create({
    username: req.body.username,
    password: req.body.password,
  })
  .then(data=>{
    console.log(data);
    res.redirect('/')
  })
});

module.exports = router;
