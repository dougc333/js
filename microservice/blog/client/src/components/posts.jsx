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
      <div class="post_container"> 
        <div class="post_div-style" onClick={this.handleClick}>Posts here
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button>Submit</Button>
      </div>
      </div>);
  }
}

export default Posts;