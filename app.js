var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();

var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gpsRouter = require('./routes/gps');
var apRouter = require('./routes/apartamentos');
var formidable = require('formidable');

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(fileUpload({
  limits: {
    fileSize: 60 * 1024 * 1024
  },
}));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var op = {
  origin: "*",
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}
app.use(cors(op));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// upload
let MB = 1024 * 1024;
let form = new formidable.IncomingForm();
form.maxFileSize = 1000 * MB; //default maxFileSize is 200MB
form.multiples = true; //default false

// upload Images
app.post('/', function(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function(name, file) {
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', function(name, file) {
    console.log('Uploaded ' + file.name);
  });

  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
app.use('/', cors(op), indexRouter);
app.use('/users', cors(op), usersRouter);
app.use('/gps', cors(op), gpsRouter);
app.use('/apartamentos', cors(op), apRouter);

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