const express = require('express');
const router = express.Router();
/*Is back-end getting passed to front-end*/
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});
module.exports = router;
