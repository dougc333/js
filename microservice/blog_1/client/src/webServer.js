//everyting in one file sync
const express = require('express')
//const bodyParser = require('body-parser')
const post_app = express();
const comment_app = express();

const post_port=4001;
const comment_port = 4002;

//API definitions


// end API

const post_server = post_app.listen(post_port,function(){  
  console.log("server listening at:",post_server.address().port);

});

const comment_server = comment_app.listen(comment_port,function(){  
  console.log("server listening at:",comment_server.address().port);
});
  





