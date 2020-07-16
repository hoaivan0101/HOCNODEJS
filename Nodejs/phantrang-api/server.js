const express = require('express')
const app = express()
const router = require('./router.js')

app.get('/',function(req,res){
    res.json('HTML')
})

app.use('/api',router)

app.listen(3000);
