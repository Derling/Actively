var express = require('express');
var request = require('request');
var router = express.Router();
var meetup = require('../controllers/meetup')

router.get('/', meetup);

module.exports = router;
