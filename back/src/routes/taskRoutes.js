const Task = require('../models/task');

module.exports = function (app) {
    app.get('/tasks', (req, res) => {
       Task.getByUser(req.decoded.sub, (err, data) => {
           if(data){
               res.json(data)
           }else {
               res.json({
                   "succes": false,
                   "msg": "error"
               })
           }

        })
    });
    app.get('/tasks/:id', (req, res) => {
        Task.getById(req.params.id, (err, data) => {
            if(data){
                res.json(data)
            }else {
                res.json({
                    "succes": false,
                    "msg": "error"
                })
            }

        })
    });
    app.post('/tasks', function(req, res) {
        const taskData ={
            id: null,
            description: req.body.description,
            taken: 0,
            userId: req.decoded.sub
        };
        Task.createTask(taskData, (err, data) =>{
            if(data && data.insertId){
                res.json({
                        succes: true,
                        msg: 'tarea Creada',
                        data: data
                    }
                );
                console.log(taskData);
            }else {
                res.status(500).json({
                    succes: false,
                    msg:'error'
                })
            }
        });
    });
    app.put('/tasks/:id', function (req, res) {
        const taskData ={
            id: req.params.id,
            description: req.body.description,
            taken: req.body.taken
        };

        Task.updateTask(taskData, (err, data) =>{
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
    app.delete('/tasks/:id', (req, res)=>{
        Task.deleteTask(req.params.id, (err, data) =>{
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