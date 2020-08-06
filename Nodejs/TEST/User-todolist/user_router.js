const express = require('express')
var router = express.Router()
var datas = require('./data/data')
var jwt = require('jsonwebtoken')

router.get('/',function(req,res){
    datas.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

router.post('/',function(req,res){
    datas.findOne({
        name:req.body.name,
        password:req.body.password
    })
        .then(result =>{
            if (result!=null){
            var token = jwt.sign(result.name,'pass');
            res.json(token)}
            else {res.json('NOT FOUND ACCOUT')}
        })
})

module.exports = router;