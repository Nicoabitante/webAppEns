const User = require('../models/user');
const jwt    = require('jsonwebtoken');
const  config = require('../utils/config')
module.exports =function (app) {
    app.post('/login', (req, res) => {
        const userData ={
            username: req.body.username,
            password: req.body.password,
        };
       User.login(userData,(err, data) => {
           if(err){
               res.json({
                   success: false,
                   msg: "user or password invalid "
               })
           }else {
               const payload = {
                   id: data.id
               };
               let token = jwt.sign(payload, config.TOKEN_SECRET, {
                   expiresIn: 1440 // expires in 24 hours
               });

               res.json({data: data,
                   token: token,
               })
           }

       })
    });


};