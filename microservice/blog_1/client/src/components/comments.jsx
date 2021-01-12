import React from 'react';
import './comments.css';
import {TextField} from '@material-ui/core';

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state={
        //existing comments. list
        comments:[],
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    console.log("comment click");
  }
  render(){
    return(
      <div className="comment_div-style"> 
      <form action="" method="get">
        <fieldset>
          <div> 
          <label >Post ID:</label>
          <TextField input type="text" />
          </div>
          <label>Add Comment:</label>
          <input type="text"></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>      
      </div>
    );
  }
  
};
export default Comments;

