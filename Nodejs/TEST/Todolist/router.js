const express = require('express');
const router = express.Router();
const data = require('./data');


router.get('/', function(req, res) {
  data.find()
      .then((data) =>{
        res.json(data);
      });
});

router.post('/', function(req, res) {
  data.create({
    name: req.body.name,
    date: req.body.date,
  })
      .then((data)=>{
        res.json(data);
      })
      .catch((err) =>{
        res.json(err);
      });
  // res.redirect('./')
});

module.exports = router;

