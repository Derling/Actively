const express = require('express');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const models = require('../models');
const router = express.Router();

router.get('/',(req,res) => {
  res.json({
    msg: "This is login page"
  })
})

router.post('/', passport.authenticate('local'),(req,res)=>{
	res.json({msg: "Successfully logged in"})
})

module.exports = router;
