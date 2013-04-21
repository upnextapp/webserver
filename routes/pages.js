module.exports = function(app) {

  app.get('/', function(req, res){
    var body = 'Welcome to our glorious web page.';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

  app.get('/about', function(req, res){
    var body = 'About: we are cool guys.';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

};  
  