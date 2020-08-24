const express=require('express');
var router = express.Router();
var datas=require('../data/userdata')
var jwt=require('jsonwebtoken');

router.get('/',function(req,res){
    res.render('login')
})

router.post('/',function(req,res){
    console.log(req.body);
    datas.findOne(req.body)
        .then(data=>{
            if (data==null){
                res.redirect('/user')
            } else {
                console.log(data);
            var token = jwt.sign(data.id,'1234')
            console.log(jwt.verify(token,'1234'));
            res.json(token)}
        })

        .catch(err=>{
            res.json(err)
        })
})

module.exports = router;