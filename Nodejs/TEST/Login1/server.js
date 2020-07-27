const express= require('express')
const app = express()
var userroute=require('./router')
var cookieParser = require('cookie-parser')
 
app.use(cookieParser())
app.use('/public',express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.json('HOME')
})

app.use('/user',userroute)

app.listen(3000)
