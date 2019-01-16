var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'burgers_db'
})

connection.connect(function(err, data){
    if (err)throw err;
    console.log('database connected');
});

module.exports = connection;
