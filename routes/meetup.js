var express = require('express');
var router = express.Router();
var meetup = require('../controllers/meetup')

router.get('/', meetup);

module.exports = router;
