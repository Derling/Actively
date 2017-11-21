const models = require('../models');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    msg: "This is home"
  });
});

module.exports = router;
