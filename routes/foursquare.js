var express = require('express');
var router = express.Router();
var forsquare = require('../controllers/foursquare.js')

router.get('/', forsquare);

module.exports = router;
