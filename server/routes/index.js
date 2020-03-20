var express = require('express');
var router = express.Router();

const Account = [
  { email: 'admin@test.com', password:'123', name:'banana', id:'admin'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  if(typeof req.body.password !== "string") {
    return res.status(401).json({
      error:"LOGIN FAILED",
      code: 1,
    })
  }

  const user = Account.find(user => user.email === req.body.email && user.password === req.body.password);
  if(user === undefined) return res.json({success: false});

  console.log(user);
  //var usernameRegex = /^[a-z0-9]+$/;
  
  return res.json({success: true});
});

module.exports = router;
