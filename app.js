const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const models = require('./models/');
const test = require('./routes/express-test.js');
const meetup = require('./routes/meetup');
//const foursquare = require('./routes/foursquare.js');
const passport = require('./middlewares/authentication');
const viewHelpers = require('./middlewares/viewHelpers');
<<<<<<< HEAD
const login = require('./controllers/login.js');
const flash = require('connect-flash');
const signup = require('./controllers/signup.js')

const app = express();




=======
const flash = require('connect-flash');
const app = express();

>>>>>>> 1eb8fdec4db464c42a060dde5dbe5477623187e6
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
//app.use('/', index);


app.use(require('./controllers/'));
app.use('/test', test);

app.use('/apis/meetup', meetup);
<<<<<<< HEAD
=======
/* Pass all route all controlers to /apis/ */
>>>>>>> 1eb8fdec4db464c42a060dde5dbe5477623187e6
app.use('/apis/',require('./controllers/'));

// Cache and disable 304 status code
app.disable('etag');

module.exports = app;

/*
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
  });
});
*/
