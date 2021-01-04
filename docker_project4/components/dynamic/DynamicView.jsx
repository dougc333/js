import React from 'react';
import Example from '../example/Example';
import States from '../states/States';
import './DynamicView.css';

class DynamicView extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
       isToggleOn: true,
       num:0 
      };
      //this.num_click = 0;
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState((state) => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    
    render() {
      return (
        <div>
          <button className='button' onClick={this.handleClick}>
            {this.state.isToggleOn ? "Example" : "States"}
          </button>
          <div className='stuff'>{this.state.isToggleOn ? <Example /> : <States />}</div>
        </div>
      );
    }
  }

  export default DynamicView;