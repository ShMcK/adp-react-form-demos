import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import submit from './submit';

class ReduxFormSave extends Component {
  render() {
    const { handleSubmit, savedInput, error } = this.props;
    return (
      <div className="container col-md-4">
        <h1>Redux-Form</h1>
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="input"
            component="input"
            type="text"
          />
          <button type="submit">Submit</button>
          <br/>
          {error && <strong>{error}</strong>}

        </form>
          <p>Saved: {savedInput}</p>

        <p>Validation: input cannot contain a number.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedInput: state.saved.input,
});

ReduxFormSave = reduxForm({ form: 'form3' })(ReduxFormSave);
ReduxFormSave = connect(mapStateToProps)(ReduxFormSave);

export default ReduxFormSave;
