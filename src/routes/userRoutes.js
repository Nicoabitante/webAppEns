const User = require('../models/user')

module.exports =function (app) {
    app.get('/users', (req, res) => {
       User.getUsers((err, data) => {
           res.json(data)
       })
    });

    app.post('/users', function(req, res) {
        const userData ={
            id: null,
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        };
        User.createUser(userData, (err, data) =>{
            if(data && data.insertId){
                res.json({
                    succes: true,
                    msg: 'usuario Creado',
                    data: data
                    }
                );
                console.log(userData);
            }else {
                res.status(500).json({
                    succes: false,
                    msg:'error'
                })
            }
        });
    });
    app.put('/users/:id', function (req, res) {
        const userData ={
            id: req.params.id,
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        };

        User.updateUser(userData, (err, data) =>{
            if (data && data.msg){
                res.json(data);
            }else {
                res.json({
                    succes: false,
                    msg: 'error'
                });
            }
        })

    });
    app.delete('/users/:id', (req, res)=>{
        User.deleteUser(req.params.id, (err, data) =>{
            if(data && data.msg){
                res.json({
                    succes:true,
                    data: data
                })
            }else {
                res.json({
                    succes: false,
                    msg: "error"
                })
            }

        })

    })
};