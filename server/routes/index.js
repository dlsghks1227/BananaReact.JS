var express = require('express');
var account = require('./account');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Requset Type : ', req.method);
  res.render('index', { title: 'Express' });
});

module.exports = router;
