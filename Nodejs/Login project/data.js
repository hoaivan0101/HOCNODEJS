// Using Node.js `require()`
const mongoose = require('mongoose');
const { Db } = require('mongodb');

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Users = new Schema({
  author: ObjectId,
  name: String,
  age: String,
},{
    collection:'ListUsers'
  });

var Listusers = mongoose.model('Lists',Users);

module.exports = Listusers;

