var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('barrage', { title: 'Annual-Gala Barrage' });
});

module.exports = router;
