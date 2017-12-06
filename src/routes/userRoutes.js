const User = require('../models/user');
const jwt    = require('jsonwebtoken');
const  config = require('../utils/config');
const express = require('express');
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
                   sub: data.id
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

    // API ROUTES -------------------

// get an instance of the router for api routes
    let apiRoutes = express.Router();


// route middleware to verify a token
    apiRoutes.use(function(req, res, next) {

        // check header or url parameters or post parameters for token
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, config.TOKEN_SECRET, function(err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    });

// apply the routes to our application with the prefix /api
    app.use('/tasks', apiRoutes);


};