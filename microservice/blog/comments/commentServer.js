var express = require('express')

var portno = 3002;
var app=express();

app.use(express.static(__dirname));

app.get('/',function(request,response){
  response.send("comment server")
});

var server=app.listen(portno, function(){
  var port = server.address().port;
  console.log('listening at http:localhost:'+port);
});