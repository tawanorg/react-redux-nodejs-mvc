const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  Todo.find(function(err, todos){
    res.send(todos);
  });
});

router.post('/', function(req, res) {
  const todo = new Todo(req.body);
  todo.save(function(){
    res.send({message:'Success'});
  })
});

router.delete('/:id', function(req,res) {
  Todo.remove({_id:req.params.id},function() {
    res.send({msg:"deleted"});
  });
})

router.post('/:id/toggle', function(req,res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (todo.done) {
      Todo.findByIdAndUpdate(req.params.id, {done:false}, function(){res.send({message:'success'})});
    } else {
      Todo.findByIdAndUpdate(req.params.id, {done:true}, function(){res.send({message:'success'})});
    }
  })
})

module.exports = router;
