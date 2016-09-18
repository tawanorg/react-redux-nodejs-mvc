
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Todo = mongoose.model('Todo', new Schema({
  title: String,
  done: {
    type:Boolean,
    default:false
  }
}));

module.exports = Todo;
