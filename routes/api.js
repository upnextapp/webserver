module.exports = function(app) {

  app.get('/api/ping', function(req, res){
    var body = '{"message":"Pong"}';
    res.setHeader('Content-Type', 'application/json ');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

  app.post('/api/queue', function(req, res){
    var phone = req.body.phone;
    var id = req.body.uniqueID;
    var pos;
    var success;
    app.db.q.findAndModify({
      query : {uniqueID:id},
      update: { $push:{queue:phone},
                $inc:{size:1}
              },
      new : true
    }, function(err, doc){
        if(err || doc.length === 0){
          success = false;
          console.log("Could not find business.");
        }
        else{
          success = true;
          pos = doc.size;
          var body = '{ "success" : "' + success + '", "position" : "' + pos + '", "size" : "' + pos + '" }';
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Content-Length': body.length
          });
          res.end(body);
        }
      }
    );
  });

  app.get('/api/list', function(req, res){
    app.db.q.find( function(err, doc){
      var success;
      if(err || doc.length === 0){
        success = false;
        console.log("No businesses found.");
      }
      else{
        success = true;
        var body = '{"queues" : [';
        for(var i = 0; i < doc.length; i++){
          body += '{"uniqueID":"' + doc[i].uniqueID + '",';
          body += '"size":"' + doc[i].size + '",';
          if (i === doc.length-1) body += '"name":"' + doc[i].name + '"}]}';
          else body += '"name":"' + doc[i].name + '"},';
        }
        res.setHeader('Content-Type', 'application/json ');
        res.setHeader('Content-Length', body.length);
        res.end(body);
      }
    });
    
  });

};  