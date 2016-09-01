import React, { Component } from 'react';

class ExpectedForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    console.log(this.refs.input.value);
  }
  render() {
    return (
      <div className="container col-md-4">
        <h1>Expected</h1>
        <form>
          <input
            ref="input"
            type="text"
            value="expected"
          />
          <button onClick={this.onSubmit.bind(this)}>Submit</button>
        </form>

        <p>This input will not update. Why?</p>
      </div>
    );
  }
}

export default ExpectedForm;
