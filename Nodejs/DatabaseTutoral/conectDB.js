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
  name: String,
  age: String,
},{
    collection:'Lists'
  });

const Accouts = mongoose.model('Lists',Users)
module.exports = Accouts;

// // Accouts.create({
// //     name: 'Van',
// //     age:29
// // })


// Accouts.find({})
// .then(data =>{
//     console.log('DATA INCLUES',data);
// })
// .catch(err =>{
//     console.log('ERR',err);
// })
// console.log(Accouts,' ..........');

