/* eslint-disable new-cap */
const express = require('express');

const router = express.Router();

const datas = require('../data/data');

router.get('/', function(req, res) {
  res.sendfile('job.html');
});

router.get('/data', function(req, res) {
  datas.find()
      .then((data)=>{
        res.json(data);
      })
      .catch((err)=>{
        res.json(err);
      });
});

router.post('/data', function(req, res) {
  console.log(req.body);
  datas.create(req.body)
      .then((data)=>{
        res.redirect('/job');
      })
      .catch((err) =>{
        res.json(err);
      });
});

router.delete('/data/:id', function(req, res) {
  datas.deleteOne({
    _id: req.params.id,
  })
      .then((data)=>{
        res.json(data);
      })
      .catch((err)=>{
        res.json(err);
      });
});


module.exports = router;
