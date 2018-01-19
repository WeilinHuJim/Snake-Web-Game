
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname+'/views'));

app.get('/', function(req,res){
	//res.sendFile(__dirname+"/"+"Snake.html");
	res.render('Snake');
})


var server = app.listen(8080)