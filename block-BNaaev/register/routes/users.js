var express = require('express');
const user = require('../models/User');
var router = express.Router();

var User = require('../models/User')

/* GET users listing. */

router.get('/',function(req,res,next){
  res.render('users');
});

router.get("/register",(req,res,next)=>{
   res.render('register')
});

router.post("/register",(req,res,next)=>{
    user.create(req.body,(err,user)=>{
     if(err) return next(err);
     res,redirect('/users/login')
    })
})

router.get("/login",(req,res,next)=>{
  res.render('login')
})

module.exports = router;
