import React from 'react';
import './comments.css';

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
      <div class="comment_div-style"> 
      <form action="" method="get">
        <fieldset>
          <div> 
          <label >Post ID:</label>
          <input type="text"></input>
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

