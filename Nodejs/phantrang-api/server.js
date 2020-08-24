const express = require('express')
const app = express()
const router = require('./router.js')

app.use('/api/public',express.static('public'))

app.get('/',function(req,res){
    res.json('HTML')
})

app.use('/api',router)

app.listen(3000);

