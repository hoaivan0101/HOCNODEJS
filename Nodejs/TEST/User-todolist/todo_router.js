const express = require('express')
var router = express.Router()
var datas = require('./data/job_data')
var jwt = require('jsonwebtoken')

router.get('/', function (req, res, next) {
  var token = req.cookies;
  try {
    var result = jwt.verify(token.token,'pass');
    next()
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
},
  function (req, res, next) {
    res.sendfile('todo_index.html')
  })

router.get('/getdata', function (req, res) {
  datas.find()
    .then(data => {
      res.json(data)
    })
})

module.exports = router;