const express= require('express');
const router = express.Router();
const datas = require('./data');
const page_size=3;

router.get('/data', function(req, res) {
  const page = parseInt(req.query.page);
  const skip = (page -1 ) * page_size;
  if (page) {
    datas.find()
        .sort({name: 'asc'})
        .skip(skip)
        .limit(page_size)
        .then((data)=>{
          res.json(data);
        });
  } else {
    datas.find()
        .sort({name: 'asc'})
        .then((data)=>{
          res.json(data);
        });
  }
});

router.get('/home', function(req, res) {
  res.sendfile('./index.html');
});

module.exports = router;
