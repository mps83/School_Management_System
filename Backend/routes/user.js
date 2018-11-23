const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/signup' , passport.authenticate('signup', {session: false}) , async (req,res,next) => {
    res.json({
        message : 'Signup Successful',
        user : req.user
    });
});

router.post('/login' , async (req,res,next) => {
    passport.authenticate('login' , async (err,user,info) => {
        try{
        if(err || !user){
            const error = new Error('An Error occured');
            return next(error);
        } 
        req.login(user, {session : false}, async (error) => {
            if(error) {
                return next(error);
            }
            const body = {_id : user._id , email : user.email};
            const token = jwt.sign({user : body}, 'top_secret');
            return res.json({
                auth : true,
                _id : user._id,
                email: user.email,
                token : token});
        })} catch(error) {
            return next(error);
        }
    })(req , res , next);
});

router.get('/profile' , (req , res , next) => {
    res.json({
        message : 'You made it to the secure route',
        user : req.user,
        token : req.query.secret_token
    })
});
module.exports = router;