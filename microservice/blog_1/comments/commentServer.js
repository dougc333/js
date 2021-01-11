const express = require('express')

const portno = 3002;
const app=express();
const bodyParser = require('body-parser');

const comments={};
id=0;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/test',function(request,response){
  response.send("comment server");
});

app.get('/comments',function(request,response){
  response.send(posts);
});


app.post('/posts/:id/comments',function(request,response){
  console.log("comments service post request.body:",request.body);
  let id = request.params.id;
  console.log('id:',id)
  console.log('body:',request.body)
  console.log(request.body['comment']);
  //if ((id in comments) === false){
  //  comments[id]=[request.body['comment']]
  //}else{
  //  comments[id].push(request.body['comment']);
  //}
  comments[request.params.id]=request.body['comment'] || []
  console.log("data is:",comments)
  response.status(201).send(comments);
});




var server=app.listen(portno, function(){
  var port = server.address().port;
  console.log('listening at http:localhost:'+port);
});