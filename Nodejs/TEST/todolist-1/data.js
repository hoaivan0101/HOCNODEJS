const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const job = new Schema({
  name: String,
  email: String,
});

const listjob = mongoose.model('users', job);

module.exports = listjob;


