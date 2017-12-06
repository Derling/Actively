const express = require('express');
const router = express.Router();
const login = require('../controllers/login')
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const models = require('../models');
router.post('/', passport.authenticate('local',  { 
           failureRedirect: '/login',
            }), 
		   (req,res)=>{
	res.json({username: req.user.username});
})

module.exports = router;




