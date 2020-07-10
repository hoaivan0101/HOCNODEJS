const express = require('express');
const app = express();
var User_router = require('./User_router.js')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.set('view engine','pug');

app.get('/',function(req,res){
    res.send('<h1>WELCOME</h1><a href="/User/">Users</a>')
})

app.use('/User/',User_router);

app.listen(3000);