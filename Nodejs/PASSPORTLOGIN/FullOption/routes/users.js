/* eslint-disable new-cap */
const express = require('express');
// const {session} = require('passport');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  console.log('session', req.session);
  res.send('respond with a resource');
});

module.exports = router;
