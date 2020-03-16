var createError = require('http-errors');
var express = require('express');
var path = require('path');

// 요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어
var cookieParser = require('cookie-parser');

// 로그 기록을 남기는 morgan모듈
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;