var mysql = require('mysql');  				// get the lib of mysql
var connection = mysql.createConnection({	// create connection with your sql
host: 'localhost',
user: 'your_user',
password: 'some_secret',
database: 'Snake_High_Score'
});

function searching(){						// searching function to search throw your database
	return new Promise(function (resolve, reject){
		try{
			connection.query('SELECT * FROM snake_record', function(err, results){		// sql query w select everty from table snake_record
				if (err) {
					reject(new Error('oops'));		// if error happen reject it
				}
				else{
					console.log("original");
		    		console.log(results);				
					resolve(results) ;				// callback the result of  searching database
				}
			});
		}catch(err){
			console.log(err.message);
		}
	});
}


async function searchDB(){							// search database
	var result =await searching();					// use await to let program to wait searchingDB finish first
	console.log(result);							
}	
		

searchDB();