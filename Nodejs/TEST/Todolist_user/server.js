const express=require('express');
const app = express();
var path = require('path');
var router_user = require('./router/user')
var router_job = require('./router/job')
var data = require('./data/data')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.set('views','views');
app.set('view engine', 'ejs');

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.sendfile('index.html')
})

app.use('/user',router_user)
app.use('/job',router_job)

app.listen(3000)