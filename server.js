var express = require('express');
var app = express();

app.get('/', function(req, res){
  var body = 'Ashton sucks';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/ashton/really/sucks', function(req, res){
  res.send("Ashton REALLY sucks");
});

app.listen(8000);
console.log('Listening on port 8000');