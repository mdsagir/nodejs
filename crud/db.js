const mysql=require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

connection.connect((err=>{
    if(!err){
        console.log('Coneection success')
    }else{
        console.log('Not connected '+err)
    }
}));

