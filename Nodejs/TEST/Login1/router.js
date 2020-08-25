const express = require('express');
const router = express.Router();
const datas= require('./data');
const jwt=require('jsonwebtoken');

router.get('/', function(req, res) {
  res.sendfile('index.html');
});

router.post('/', function(req, res) {
  const username = req.body.name;
  const password = req.body.password;
  datas.findOne(req.body)
      .then((data) =>{
        if (data) {
          const token = jwt.sign(data.id, '1234');
          res.json(token);
        } else {
          res.json('KHONG TIM THAY ACCOUNT');
        }
      });
});

router.get('/data', function(req, res, next) {
  const token1 = req.cookies;
  console.log(jwt.verify(req.cookies.token, '1234'));
  try {
    const result = jwt.verify(req.cookies.token, '1234');
  } catch (error) {
    res.json(error);
  }
  next();
}, function(req, res, next) {
  res.json('WELCOME');
});

module.exports = router;
