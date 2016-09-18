
require('./server/api');

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function() {
  console.log('[Frontend] listening to port ' + 3000)
});
