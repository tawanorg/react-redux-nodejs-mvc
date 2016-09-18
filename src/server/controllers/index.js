const express = require('express');
const router = express.Router();

router.use('/todo', require('./todo'));
//default routes here
//these could go in a separate file if you want
router.get('/', function(req, res) {
  res.send('Home page for API')
})
module.exports = router;
