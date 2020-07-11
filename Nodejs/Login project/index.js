const express = require('express');
const app = express();
var Listusers = require('./data')

app.set('view engine','pug')

app.get('/',function(req,res){
    Listusers.find().then(function(data){
        console.log(data[1]._username);
        res.render('ShowUsers',{Users:data})
    })
})

app.listen(3000);
