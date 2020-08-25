const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const datas = require('./data');
const pageSize = 2;

router.get('/home', (req, res) => {
  res.sendfile('index.html');
});

router.get('/data', function(req, res) {
  const page = parseInt(req.query.page);
  const skip = (page - 1) * pageSize;
  datas
      .find()
      .sort({name: 'asc'})
      .skip(skip)
      .limit(pageSize)
      .then(function(data) {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

module.exports = router;
