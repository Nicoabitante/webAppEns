
const mysql = require('mysql');

let Connection = {};

Connection.getConection=()=>{
    connection  = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'kairos',
            database: 'dbapp'
        }
    );

};
module.exports = Connection;