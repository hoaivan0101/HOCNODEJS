const express= require('express');
var router = express.Router();
var datas = require('./data')

router.get('/',function(req,res){
    datas.find()
        .then(data=>{
            res.json(data)
        })
})

module.exports = router;