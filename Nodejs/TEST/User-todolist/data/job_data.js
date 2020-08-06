const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
var job = new Schema({
    title:String,
    time:String,
})

var listjob = mongoose.model('datas',job)

module.exports = listjob


