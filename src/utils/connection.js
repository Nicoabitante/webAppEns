
const mysql = require('mysql');

let Connection = {};

Connection.getConection=()=>{
    connection  = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'nico0208',
            database: 'dbapp'
        }
    );

};
module.exports = Connection;