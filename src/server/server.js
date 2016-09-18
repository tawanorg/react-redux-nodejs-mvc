const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
// Database connection
mongoose.connect('mongodb://admin:admin@ds033066.mlab.com:33066/tectactic')
const Todo = require('./models/TodoModel.js')

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});
app.use(bodyParser.json())
app.use('/api/', require('./controllers'))
app.get('*', function(req, res){
  res.send('The page you request is not found', 404)
})

app.listen(3001,function(){
  console.log('[API] listening to port '+ 3001)
})
