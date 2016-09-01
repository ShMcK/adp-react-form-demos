import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ReduxForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container col-md-4">
        <h1>Redux-Form</h1>
        <form onSubmit={handleSubmit((fields) => console.log(fields.input))}>
          <Field
            name="input"
            component="input"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>

        <p>Redux-Form updates the store with the form state.</p>
      </div>
    );
  }
}

ReduxForm = reduxForm({
  form: 'reduxForm'
})(ReduxForm);

export default ReduxForm;
