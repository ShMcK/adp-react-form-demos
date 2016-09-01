import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { saveForm } from '../actions';

class ReduxFormSave extends Component {
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
          <button type="submit">Submit</button>
        </form>
        <p>Saved: {savedInput}</p>

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

ReduxFormSave = reduxForm({ form: 'form2' })(ReduxFormSave);
ReduxFormSave = connect(mapStateToProps, mapDispatchToProps)(ReduxFormSave);

export default ReduxFormSave;
