const express = require('express');
const router = express.Router();
const data = require('../controllers/crime-stats-nyc/robberies.json')

router.get('/robberies', (req,res) => {
  res.json(data);
});

module.exports = router;
