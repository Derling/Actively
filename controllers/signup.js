const models = require('../models');
const express = require('express');
const router = express.Router();


router.post('/',(req,res) => {
  const userdata = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  }
	models.user.create(userdata)
  .then((user)=>{
    res.json({msg: "Successful to signup"})
    
  })
  .catch(()=>{
    res.json({msg: "Either email or username is already registered"})
  })
        
});

module.exports = router;
