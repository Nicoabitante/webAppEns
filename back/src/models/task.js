const Connection = require('../utils/connection');

conecction =Connection.getConection();


let taskModel = {};

taskModel.getByUser = function(userId, callback) {
    if(connection){
        const sql = `SELECT * FROM tasks WHERE userId = ${connection.escape(userId)}`;
        connection.query(sql, (err, rows)=> {
            if(err){
                throw err;
            }else {
                callback(null, rows);
            }
        })
    }
};

taskModel.createTask = (data, callback) => {
    if(connection){
        connection.query('INSERT INTO tasks SET ?', data, (err, result) =>{
            if(err){
                throw err;
            }else {
                callback(null,  {'insertId':result.insertId})
            }
        })
    }

};
taskModel.updateTask= (data, callback) => {
    if(connection){
        const sql =`
            UPDATE tasks SET 
            description = ${connection.escape(data.description)},
            taken = ${connection.escape(data.taken)} 
            WHERE id = ${connection.escape(data.id)}
        `;
        connection.query(sql,(err, resultado) =>{
            if(err){
                throw err;
            }else {
                callback(null, {
                    "msg": "Success"
                })
            }
        })
    }

};
taskModel.deleteTask = (id, callback) =>{
    if(connection){
        const sql =`DELETE FROM tasks WHERE id= ${connection.escape(id)}`;
        connection.query(sql,(err, resultado) => {
            if (err){
                throw err;
            }else {
                callback(null, {
                    "msg":"success"
                })
            }
        });

    }
};



module.exports = taskModel;