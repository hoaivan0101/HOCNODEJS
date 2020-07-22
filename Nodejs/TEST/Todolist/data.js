const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job = new Schema({
    name:String,
    date:Date,
})

var listjob = mongoose.model('tasks',job)

module.exports = listjob


