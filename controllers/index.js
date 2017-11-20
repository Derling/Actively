const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const router = express.Router();

router.use('/', require('./home'));
router.use('/login',require('./login'));
router.use('/signup',require('./signup'));
router.use('/logout', require('./logout'));


module.exports = router;

