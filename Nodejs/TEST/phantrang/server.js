const express = require('express')
const app = express()
var router = require('./router')


app.use('/public',express.static('./public'))
app.get('/',function(req,res){
    res.json('HTML')
})

app.use('/',router)

app.listen(3000)

