const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const job1 = new Schema({
  name: String,
  job: String,
});

const listjob1 = mongoose.model('users', job1);
module.exports = listjob1;


