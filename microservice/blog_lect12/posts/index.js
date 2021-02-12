const express = require('express');
const app = express();
const {randomBytes} = require('crypto');

const bodyParser = require('body-parser');
const posts = {}
app.use(bodyParser.json());


app.get('/posts',(req,res)=>{
  console.log("/posts get");
  res.send(posts);
});

app.post('/posts',(req,res)=>{
  console.log("posts post");
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;
  posts[id] = {
   id,title
  };
  
  res.status(200).send(posts[id]);
});


app.listen(4000,()=>{
  console.log("4000 started");

});
