var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.get('/', function(req, res) {
  res.redirect('http://nerdsnook.ddns.net/helpdesk/?p=open');
});

var PORT = process.env.PORT || 3000;
server.listen(PORT, function(){
    console.log("Listening on PORT " + process.env.PORT);
})
