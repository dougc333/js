const express = require('express')
const bodyParser = require('body-parser');

const portno = 3001;
const app=express();

app.use(express.static(__dirname));
app.use(bodyParser);

posts = {};
id=0;

app.get('/',function(request,response){

  response.send("posts:", posts)
});

app.post('/',function(request,response){
  posts[id] = request.body;
  id++;
  console.log("posts:",posts);
  response.send(200)
});


var server=app.listen(portno, function(){
  var port = server.address().port;
  console.log('listening at http:localhost:'+port);
});