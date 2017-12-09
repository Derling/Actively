const models = require('../models/');
const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
        res.json({
          msg: "This is signup page"
        })
});

router.post('/',(req,res) => {
  const userdata = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  }
	console.log("Recieved",userdata);
	models.user.create(userdata)
  .then((user)=> {
		console.log("Created",user);
    res.json([{msg: "Welcome " + user.username}])
  })
  /*
  .catch(()=> {
    res.json([{msg: "Either email or username is already registered"}])
  }
    */    
});

module.exports = router;
