

//dependencies
var express=require('express');
var bodyParser = require('body-parser');
var path = require('path');

//setting express app
var app=express();
var PORT=process.env.PORT || 8080;

//setting the express app to handle date parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'))
//route to home page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});

//Starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});