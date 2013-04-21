module.exports = function(app) {

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
    var body = '{"queues":[{"uniqueID": 001, "name": "Olive Garden"}, {"uniqueID": 002, "name": "Korea House"}, {"uniqueID": 003, "name": "Trulucks"}]';
    res.setHeader('Content-Type', 'application/json ');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

};  