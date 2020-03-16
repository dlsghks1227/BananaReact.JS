var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Requset Type : ', req.method);
  res.render('index', { title: 'Express' });
});

router.post('/SignIn', (req, res) => {
  res.json({ success: true });
});

module.exports = router;
