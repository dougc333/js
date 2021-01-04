import React from 'react';
import './States.css';


/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text_data: "" };
    this.arr = window.cs142models.statesModel();
    //console.log(this.arr);
  }
  
  handleChange = e => {
    this.setState({ text_data: e.target.value });
    this.event = e.target.value;
  };

  get_states(){
    //let returnMe = []
    //? returnMe.push(true):returnMe.push(false)
    //let res = this.arr.map(x=>x.toLowerCase().match(this.event) );
    let filterMe = this.arr.filter(x=>x.toLowerCase().match(this.event));
    return filterMe;
  }

  render() {
    return (
      <div>
        Enter in search string or characters for substring match:
        <input
          type="text"
          value={this.state.text_data}
          onChange={this.handleChange}
        />
    <h4>The filter:</h4>
    {this.event}
    <h4>After filtering</h4>
      <ul >{this.get_states().map(x=><li key={x}>{x}</li>)}</ul>
      </div>
    );
  }
}

export default States;
