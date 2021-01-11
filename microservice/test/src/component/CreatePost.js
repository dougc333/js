import React from 'react';
import './CreatePost.css';

const CreatePost =() => {
  return(
    <form class="container">
      <div className="label_div-style">  
      <label className="label-style">Title</label>
      </div>
      <input type="text"></input>
      <button name="title" type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;

