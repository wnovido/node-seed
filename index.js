/**
 * Created by wilso_000 on 11/19/2014.
 */
var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	port = process.env.PORT || 2595;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view options", {
	layout: false
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('public/index.html');
});

app.listen(port);
console.log('Express server running at http://localhost:' + port);
