import React from 'react';
import './posts.css'
import {TextField,Button} from "@material-ui/core";

class Posts extends React.Component{
  constructor(props){
      super(props);
      this.state={
          posts:[],
      }
      this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    //e.preventDefault();
    console.log("posts click")
  }
  
  render(){
    return(
      <div class="post_container-style"> 
      <div>
      Posts here
      </div>
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div>
        <Button class="submit-style" onClick='handleClick'><span class="text-style">Submit</span></Button>
        </div>
      </div>
      );
  }
}

export default Posts;