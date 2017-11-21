const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const models = require('./models/');
//const index = require('./routes/index');
//const users = require('./routes/users');

const test = require('./routes/test.js');
const meetup = require('./routes/meetup');

const passport = require('./middlewares/authentication');
const viewHelpers = require('./middlewares/viewHelpers')



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
app.use('/apis/meetup', meetup);


app.use(require('./controllers/'));



// Cache and 304 status code
app.disable('etag');

module.exports = app;

/*
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });

});
*/
