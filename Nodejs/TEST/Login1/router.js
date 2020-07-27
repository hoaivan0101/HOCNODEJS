const express = require('express')
var router = express.Router()
var datas= require('./data')
const jwt=require('jsonwebtoken')

router.get('/',function(req,res){
    res.sendfile('index.html')
})

router.post('/',function(req,res){
    let username = req.body.name;
    let password = req.body.password;
    datas.findOne(req.body)
        .then(data =>{
            if (data){
                var token = jwt.sign(data.id,'1234')
                res.json(token)
            } else {
                res.json('KHONG TIM THAY ACCOUNT')
            }
        })
})

router.get('/data',function(req,res,next){
    let token = req.cookies;
    try {
        var result = jwt.verify(token,'1234');
        alert(result)
    } catch (error) {
        res.json(err)
    }
    next();
},function(req,res,next){
    res.json('WELCOME')
})

module.exports = router;