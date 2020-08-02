const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Users = new Schema({
  name: String,
  password: String,
});

const Accouts = mongoose.model('accounts',Users)
module.exports = Accouts;