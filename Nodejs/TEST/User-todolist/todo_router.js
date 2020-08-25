const express = require('express');
const router = express.Router();
const datas = require('./data/job_data');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  const token = req.cookies;
  try {
    const result = jwt.verify(token.token, 'pass');
    next();
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
},
function(req, res, next) {
  res.sendfile('todo_index.html');
});

router.get('/getdata', function(req, res) {
  datas.find()
      .then((data) => {
        res.json(data);
      });
});

module.exports = router;
