const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job = new Schema({
    name:String,
    email:String,
})

var listjob = mongoose.model('users',job)

module.exports = listjob


