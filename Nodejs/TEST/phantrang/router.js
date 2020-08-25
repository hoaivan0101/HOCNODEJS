const express = require('express');
const router = express.Router();
const datas = require('./data');
const page_size = 2;

router.get('/home', (req, res)=>{
  res.sendfile('index.html');
});

router.get('/data', function(req, res) {
  const page = parseInt(req.query.page);
  const skip = (page-1)*page_size;
  datas.find()
      .sort({name: 'asc'})
      .skip(skip)
      .limit(page_size)
      .then(function(data) {
        res.json(data);
      })
      .catch((err)=>{
        res.json(err);
      });
});

module.exports = router;
