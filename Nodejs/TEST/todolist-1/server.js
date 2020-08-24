const express = require('express')
const app = express()
const path = require('path')
var job_router = require('./router')

app.use('/public',express.static(path.join(__dirname,'/public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendfile(path.join(__dirname,'index.html'))
})

app.use('/api',job_router);

app.listen(8080)