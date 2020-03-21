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
  if(user === undefined) {
    return res.status(401).json({
      error:"LOGIN FAILED",
      code: 1,
    })
  }

  var session = req.session;
  session.loginInfo ={
    _id: user.id,
    _email: user.email,
    _name: user.name,
  }

  console.log(session.loginInfo);
  //var usernameRegex = /^[a-z0-9]+$/;
  
  return res.json({ userinfo : session.loginInfo });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if(err) throw err;
  });

  return res.json({ success: true });
});

router.get('/getinfo', function(req, res, next) {
  if(typeof req.session.loginInfo === "undefined") {
    return res.status(401).json({
      error: 1
    });
  }

  return res.json({ userinfo : req.session.loginInfo });
});

module.exports = router;
