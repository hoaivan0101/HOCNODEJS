const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
  name: String,
  age: String,
}, {
  collection: 'Lists',
});

const Listusers = mongoose.model('Lists', Users);
Listusers.find().sort('name');


module.exports = Listusers;

