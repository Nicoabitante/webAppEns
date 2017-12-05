const User = require('../models/user');

module.exports =function (app) {
    app.post('/login', (req, res) => {
        const userData ={
            username: req.body.username,
            password: req.body.password,
        };
       User.login(userData,(err, data) => {
           res.json(data)
       })
    });


};