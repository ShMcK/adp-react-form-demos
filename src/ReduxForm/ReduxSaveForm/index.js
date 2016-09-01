import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { saveForm } from '../actions';

class ReduxForm extends Component {
  render() {
    const { handleSubmit, onSaveForm, savedInput } = this.props;
    return (
      <div className="container col-md-4">
        <h1>Redux-Form</h1>
        <form onSubmit={handleSubmit(onSaveForm)}>
          <Field
            name="input"
            component="input"
            type="text"
          />
        <p>Saved: {savedInput}</p>
          <button type="submit">Submit</button>
        </form>

        <p>Redux-Form updates the store with the form state.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedInput: state.saved.input,
});

const mapDispatchToProps = {
  onSaveForm: saveForm,
};

ReduxForm = reduxForm({ form: 'form2' })(ReduxForm);
ReduxForm = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);

export default ReduxForm;
