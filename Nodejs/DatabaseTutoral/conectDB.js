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
    collection:'Lists'
  });

const Accouts = mongoose.model('ABC',Users)

Accouts.create({
    name: 'Van',
    age:29
})


Accouts.find({})
.then(function(data){
    console.log('Data',data);
})
.catch(function(err){
    console.log('Err',err);
})
console.log(Accouts,' ..........');

