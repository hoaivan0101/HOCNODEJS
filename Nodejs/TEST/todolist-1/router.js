const express = require('express')
var router = express.Router()
var data = require('./data')

router.get('/',function(req,res){
    data.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
})

router.post('/',function(req,res){
    data.create(req.body)
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})

router.delete('/',function(req,res){
    data.deleteOne({
        _id:req.params.id})
        .then(data=>{
            res.json(data)
        })
})

module.exports = router;
