var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'your_user',
	password: 'some_secret',
	database: 'Snake_High_Score'
});

connection.connect(function(err){
	if (err) throw err;
	connection.query('CREATE TABLE snake_record(name VARCHAR(255), score INT)', function(err, result){
		if (err) throw err;
		connection.query('INSERT INTO snake_record (name, score) VALUES ("test1", 10)', function(err, result){
			if (err) throw err;
			connection.query('SELECT * FROM snake_record', function(err, results){
				if (err) throw err;
        		console.log(results);
			});
		});
	});
});

