var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const models = require('./models/');
//var index = require('./routes/index');
//var users = require('./routes/users');

const passport = require('./middlewares/authentication');
const viewHelpers = require('./middlewares/viewHelpers')



const test = require('./routes/test.js');
const app = express();

// view engine setup
//app.set('views', `${__dirname}/views/`);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(viewHelpers.register());

//app.use('/', index);
//app.use('/users', users);
app.use('/test', test);

app.use(require('./controllers/'));



module.exports = app;

/*
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });

});
*/