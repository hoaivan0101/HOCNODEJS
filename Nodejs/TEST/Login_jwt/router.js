const express = require('express');
const router = express.Router();
const data = require('./data');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res) {
  res.sendfile('index.html');
});

router.post('/', function(req, res) {
  data.findOne(req.body)
      .then((data) => {
        if (data) {
          res.json({
            status: 'SUCCES',
            token: jwt.sign(data.name, '123'),
          });
        } else {
          res.json('KHONG TIM THAY ACCOUNT');
        }
      })
      .catch((err) => {
        res.json(err);
      });
});

router.get('/home', function(req, res, next) {
  try {
    const ketqua = jwt.verify(req.cookies.token, '123');
    next();
  } catch (error) {
    res.redirect('/user');
  }
}, function(req, res, next) {
  res.json('WELCOME USERS HOME');
});

module.exports = router;
