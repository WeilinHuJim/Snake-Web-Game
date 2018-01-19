
var express = require('express');
var app = express();

app.use('/', express.static(__dirname+'/'));
app.set('/', 'ejs')
app.get('/', function(req,res){
	//res.sendFile(__dirname+"/"+"Snake.html");
	res.render('Snake');
})


var server = app.listen(8080)