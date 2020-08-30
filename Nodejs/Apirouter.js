const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/Product', function(req, res) {
  res.send('<h1>Router Product</h1>');
});

router.get('/Cart', function(req, res) {
  res.send('<h1>Router Cart</h1>');
});

router.get('/:id', function(req, res) {
  res.send('<h1>Router</h1>' + req.params.id);
});

module.exports = router;
