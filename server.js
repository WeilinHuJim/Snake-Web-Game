
var express = require('express');
var app = express();
var snake_db = require('./database');

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname+'/views'));

app.get('/', async function(req,res){
	//res.sendFile(__dirname+"/"+"Snake.html");
	var result = await snake_db.searchDB();
	res.render('Snake', {records: result });
})


var server = app.listen(8080)