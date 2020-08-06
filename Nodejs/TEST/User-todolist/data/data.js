const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job1 = new Schema({
    name:String,
    password:String,
})

var listjob1 = mongoose.model('accounts',job1)

module.exports = listjob1


