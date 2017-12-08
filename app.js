const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const test = require('./routes/express-test.js');
const meetup = require('./routes/meetup');
const models = require('./models/');
const db = require('./models/index.js');

//const foursquare = require('./routes/foursquare.js');
const passport = require('./middlewares/authentication');
const viewHelpers = require('./middlewares/viewHelpers');
const flash = require('connect-flash');
const app = express();

// uncomment after placing your favicon in /public

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(viewHelpers.register());

app.use(flash());
app.use('/test', test);
app.use('/apis/meetup', meetup);
/* Pass all route all controlers to /apis/ */
app.use('/apis/',require('./controllers/'));
// Cache and disable 304 status code
app.disable('etag');


module.exports = app;

