
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	res.json({msg: "Successfully to get logout"})
})

router.post('/',(req,res)=>{
	req.logout();
	res.json({msg: " Successfully to post logout"})
})

module.exports = router;