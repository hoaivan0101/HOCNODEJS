const express = require('express')
var router = express.Router()
var datas = require('./data')
var page_size = 2;

router.get('/home',(req,res)=>{
    res.sendfile('index.html')
})

router.get('/data',function(req,res){
    var page = parseInt(req.query.page);
    var skip = (page-1)*page_size
    datas.find()
        .sort({name:'asc'})
        .skip(skip)
        .limit(page_size)
        .then(function(data){
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})

module.exports = router;
