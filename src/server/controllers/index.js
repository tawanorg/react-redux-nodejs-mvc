const express = require('express');
const router = express.Router();
const fs        = require('fs');
const path      = require('path');

// // Loop to load all routes files js
// {
//   const files = fs.readdirSync("server/controllers");
//   for(const index in files) {
//       const file = files[index];
//       // skip index.js
//       if (file === "index.js") continue;
//       // skip non-javascript files
//       if (path.extname(file) != ".js") continue;
//       const path.extname(file) = require("./" + path.basename(file));
//       // Add router to handle routing
//       routes(router);
//   }
// }

router.use('/todo', require('./todoController'));
//default routes here
//these could go in a separate file if you want
router.get('/', function(req, res) {
  res.send({message:'No Permission'});
})

module.exports = router;
