module.exports = function(app) {

  app.get('/', function(req, res){
    var body = 'Welcome to our glorious web page.';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

  app.get('/api/ping', function(req, res){
    var body = '{"message":"Pong"}';
    res.setHeader('Content-Type', 'application/json ');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

  app.get('/api/queue', function(req, res){
    var payload = [];
    req.on('data', function(data){
      payload.push(data);
    });
    req.on('end', function(){
      console.log(payload.join(''));
      res.send("Added to queue");
    });
  });

  app.get('/api/list', function(req, res){
    var body = '{"024091":"Olive Garden", "124091":"Korea House", "051011":"Trulucks"}';
    res.setHeader('Content-Type', 'application/json ');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

};  