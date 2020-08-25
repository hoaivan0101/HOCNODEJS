const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const job = new Schema({
  title: String,
  time: String,
});

const listjob = mongoose.model('datas', job);

module.exports = listjob;


