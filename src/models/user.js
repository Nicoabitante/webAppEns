const mysql = require('mysql');


connection  = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'nico0208',
        database: 'dbapp'
    }
);

let userModel = {};


userModel.getUsers = (callback) =>{
    if (connection){
        connection.query('SELECT * FROM users ORDER BY id', (err, rows) => {
            if(err){
                throw err;
            }else callback(null, rows);
        })
    }

};

userModel.createUser = (userData, callback) => {
    if(connection){
        connection.query('INSERT INTO users SET ?', userData, (err, result) =>{
            if(err){
                throw err;
            }else {
                callback(null,  {'insertId':result.insertId})
            }
        })
    }

};
userModel.updateUser = (userData, callback) => {
    if(connection){
        const sql =`
            UPDATE users SET 
            username = ${connection.escape(userData.username)},
            password = ${connection.escape(userData.password)},
            name = ${connection.escape(userData.name)} 
            WHERE id = ${connection.escape(userData.id)}
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
userModel.deleteUser = (id, callback) =>{
  if(connection){
      const sql =`DELETE FROM users WHERE id= ${connection.escape(id)}`;
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
module.exports = userModel;