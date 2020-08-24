const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job1 = new Schema({
    name:String,
    job:String,
})

var listjob1 = mongoose.model('accounts',job1)
module.exports = listjob1


