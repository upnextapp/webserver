// use express for routing
var express = require('express');
var http = require ('http');
var app = express();
var server = http.createServer(app);

// connect to mongoDB
var databaseUrl = "inqueue";
var collections = ["q"];
app.db = require('mongojs').connect(databaseUrl, collections);

// hack to figure out routing for now...
//app.api = "ec2-54-244-184-198.us-west-2.compute.amazonaws.com/api";

// set up static routes
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

// set up routes in the routes/ folder
// all the js files in routes
require('./routes')(app);

// start server
// aws -> 80 default http connection
// sudo nohup node server.js ------> log in as admin to run for AWS
server.listen(80);
console.log('Listening on port 8000');