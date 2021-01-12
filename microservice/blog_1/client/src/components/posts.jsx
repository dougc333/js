import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
      <form>
        <TextField id="standard-basic" label="Post Title"/>
      </form>
      );
  }
}

export default Posts;