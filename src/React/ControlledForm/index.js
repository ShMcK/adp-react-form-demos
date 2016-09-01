import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'controlled',
    };
  }
  handleChange(event) {
    const value = event.target.value;
    // console.log(value);
    this.setState({
      value
    });
  }
  onSubmit(event){
    event.preventDefault();
    console.log(this.state.value);
  }
  render() {
    return (
      <div className="container col-md-4">
        <h1>Controlled</h1>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.onSubmit.bind(this)}>Submit</button>
        </form>

        <p>This form calls a function to update the component state on each change.</p>
      </div>
    );
  }
}

export default ControlledForm;
