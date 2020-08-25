const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const data = require('./data');

router.get('/', function(req, res) {
  data.find()
      .then((data)=>{
        res.json(data);
      })
      .catch((err) =>{
        res.json(err);
      });
});

router.post('/', function(req, res) {
  data.create(req.body)
      .then((data)=>{
        res.json(data);
      })
      .catch((err)=>{
        res.json(err);
      });
});

router.put('/:id', function(req, res) {
  data.updateOne({
    _id: req.params.id}, {
    name: req.query.newname,
    email: req.query.newemail,
  })
      .then((data)=>{
        res.json(data);
      });
});

router.delete('/:id', function(req, res) {
  data.deleteOne({
    _id: req.params.id})
      .then((data)=>{
        res.json(data);
      });
});

module.exports = router;
