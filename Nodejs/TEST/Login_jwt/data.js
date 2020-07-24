const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job = new Schema({
    name:String,
    password:String,
})

var listjob = mongoose.model('Account',job)

module.exports = listjob


