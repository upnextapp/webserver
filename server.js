// use express for routing
var express = require('express')
  , passport = require('passport')
  , http = require ('http')
  , app = express()
  , server = http.createServer(app);

// connect to mongoDB
var databaseUrl = "inqueue";
var collections = ["q"];
app.db = require('mongojs').connect(databaseUrl, collections);

// hack to figure out routing for now...
//app.api = "ec2-54-244-184-198.us-west-2.compute.amazonaws.com/api";

/*
// set up static routes
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
*/

//setting up passport.js
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'uhpnext' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});


// set up routes in the routes/ folder
// all the js files in routes
require('./routes')(app);
require('./routes/passport')(passport, config);

// start server
// aws -> 80 default http connection
// sudo nohup node server.js ------> log in as admin to run for AWS
server.listen(80);
console.log('Listening on port 8000');