const express = require('express');
const router = express.Router();
const passport = require('../middlewares/authentication');
const models = require('../models');

router.post('/', passport.authenticate('local'), 
		   (req,res)=>{
	res.json({username: req.user.username});
})

module.exports = router;
