import React, { Component } from 'react';

class UncontrolledForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    console.log(this.refs.input.value);
  }
  render() {
    return (
      <div className="container col-md-4">
        <h1>Uncontrolled Form</h1>
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            ref="input"
            type="text"
            defaultValue="uncontrolled"
          />
          <button type="submit">Submit</button>
        </form>

        <p>This input holds it's state internally. It must be targetted to get values, similar to a jQuery form.</p>
      </div>
    );
  }
}

export default UncontrolledForm;
