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
    return <div class="comment_div" onClick={this.handleClick}>Comments here</div>;
  }
};
export default Comments;

