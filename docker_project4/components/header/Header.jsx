import React from 'react';
import './Header.css';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return (
      <header className="top">
        <figure className="fig"> 
          <img className = "scale_image" src="jack.jpg"/> 
          <figcaption>This is an image caption. </figcaption>
      </figure>
      </header>);
  }
}

export default Header;

