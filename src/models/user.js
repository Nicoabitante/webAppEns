
const Connection = require('../utils/connection');

 conecction =Connection.getConection();

// connection  = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'nico0208',
//         database: 'dbapp'
//     }
// );

let userModel = {};


userModel.login = (data,callback) =>{
    if (connection){
        sql = `SELECT * FROM users WHERE username =${connection.escape(data.username)} AND password = ${connection.escape(data.password)} ORDER BY id`;
        connection.query(sql, (err, rows) => {
            if(err){
                throw err;
            }else callback(null, rows);
        })
    }

};


module.exports = userModel;