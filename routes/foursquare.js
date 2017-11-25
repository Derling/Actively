var express = require('express');
var router = express.Router();
var forsquareExplore = require('../controllers/foursquare.js')

router.get('/explore', forsquareExplore);

module.exports = router;
