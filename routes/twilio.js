var sid = "ACf6a03f5cf2f2ac8ce544c0db7d51ebf7";
var token = "74e713537ef1345e570282ae21056ca3";
var tw_num = "+18173857726";

var twilio = require('twilio');
var client = new twilio.RestClient(sid, token);

module.exports = function(app) {

  app.get('/api/twilio', function(req, res){
    client.sms.messages.create({
      to: '+19723222268',
      from: tw_num,
      body: req.body.message
    },
    function(error, message) {
      if (error) {
          console.log(error.message);
      }
    });
  });

};