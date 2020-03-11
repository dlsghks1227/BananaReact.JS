var express = require('express');
var router = express.Router();

// req  : 미들웨어 함수에 대한 HTTP 요청 인수
// res  : 미들웨어 함수에 대한 HTTP 응답 인수
// next : 미들웨어 함수에 대한 콜백 인수

// 가입
router.post('/signup', (req, res) => {
    res.json({ success : true });
});

// 로그인
router.post('/signin', (req, res) => {
    res.json({ success: true });
});

module.exports = router;