const express = require('express')
const app = express()
const user_router = require('./router')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
    res.sendfile('index.html')
})

app.use('/user',user_router)

app.listen(3000)