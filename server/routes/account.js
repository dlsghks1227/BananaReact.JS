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
router.post('/', (req, res) => {
    // POST 방식으로 넘어오는 파라미터를 담고있다.
    // if(typeof req.body.password !== "string") {
    //     // 응답코드를 설정한다.
    //     return res.status(401).json({
    //         error: "LOGIN FAILED",
    //         code: 1,
    //     });
    // }
    res.json({ success: true });
});

module.exports = router;