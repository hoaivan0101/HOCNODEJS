const express = require('express');
const app = express();

app.set('views','./views')
app.set('view engine','pug')

app.get('/',function(req,res){
    res.send('<h1>HTML</h1><a href="./Users">Users</a>')
})

var Listusers = [{name: 'van', age:28},{name: 'User2',age:27}]

app.get('/Users', function(req,res){
    res.render('index', {Users:Listusers})
})

app.get('/Users/search', function(req,res){
    var Result = Listusers.filter(function(user){
        return user.name.indexOf(req.query.q)!==-1;
    })
    res.render('index', {Users:Result})
})

app.listen(3000);