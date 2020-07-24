const express=require('express')
const app=express()
var user_router = require('./router')
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/public',express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendfile('index.html')
})

app.use('/user',user_router)

app.listen(3000)