var express = require('express');
var router = express.Router();
var eventbrite = require('../controllers/eventbrite')

router.get('/', eventbrite);

module.exports = router;
