var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/admin.html');
});


io.on('connection', function(socket){
  socket.on('help_call', function(msg){
    io.emit('help_call', msg);
  });
});


var PORT = process.env.PORT || 3000;
http.listen(PORT, function(){
    console.log("started Server");
})


