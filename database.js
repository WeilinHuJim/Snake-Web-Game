
var mysql = require('mysql');  				// get the lib of mysql
var connection = mysql.createConnection({	// create connection with your sql
host: 'localhost',
user: 'your_user',
password: 'some_secret',
database: 'Snake_High_Score'
});

var dbmanager={
	searching: function(){						// searching function to search throw your database
		return new Promise(function (resolve, reject){
			try{
				connection.query('SELECT * FROM snake_record', function(err, results){		// sql query w select everty from table snake_record
					if (err) {
						reject(new Error('oops'));		// if error happen reject it
					}
					else{		
						resolve(results) ;				// callback the result of  searching database
					}
				});
			}catch(err){
				console.log(err.message);
			}
		});
	},


	searchDB: async function(){							// search database
		var result =await this.searching();					// use await to let program to wait searchingDB finish first
		return result;							
	}	
		

};
module.exports = dbmanager;

//searchDB();