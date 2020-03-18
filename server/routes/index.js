var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
});

router.post('/login', function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);
  
  return res.json({success: true});
});

module.exports = router;
