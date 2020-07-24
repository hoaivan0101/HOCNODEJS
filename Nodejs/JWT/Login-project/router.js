const express = require('express')
var router = express.Router()
var data = require('./data')
var jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
    res.sendfile('index.html')
})

router.post('/', function (req, res) {
    data.findOne({
        name: req.body.name,
        password: req.body.password
    })
        .then(data => {
            if (data) {
                let token = jwt.sign({ name: data.name }, '123123');
                res.json({ status: 'SUCCESS', token: token })
            }
            else { res.json('ERR ACCOUNT') }
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/home',function(req,res,next){
    try {
        var ketqua = jwt.verify(req.cookies.token, '123123')
        next()
    } catch (error) {
        res.redirect('/user')
    } 
},function(req,res,next){
    res.json('WELHOME')
})
module.exports = router