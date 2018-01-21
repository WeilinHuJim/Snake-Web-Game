var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'your_user',
	password: 'some_secret',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE Snake_High_Score", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});