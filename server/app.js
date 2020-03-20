var express = require('express');
var path = require('path');
// 요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어
var cookieParser = require('cookie-parser');
// 로그 기록을 남기는 모듈
var logger = require('morgan');

// -----Router-----
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// ----------------

var app = express();

app.use(logger('dev'));

// body-parser를 사용
app.use(express.json());

// extended
//  false : 노드의 query-string 모듈을 사용하여 쿼리스트링을 해석
//  true  : qs모듈을 사용하여 쿼리스트링을 해석
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Express에서 제공되고 정적 파일 서비스를 도와준다
app.use(express.static(path.join(__dirname, 'public')));

// -----Router-----
app.use('/', indexRouter);
app.use('/users', usersRouter);
// ----------------

module.exports = app;
