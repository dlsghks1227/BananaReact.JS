var express = require('express');
var account = require('./account');

var router = express.Router();

router.use('/account', account);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "Banana1"},
    {id: 2, username: "Banana2"}
  ]);
});

module.exports = router;
