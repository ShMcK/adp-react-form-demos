import React from 'react';

import ControlledForm from './ControlledForm';
import ExpectedForm from './ExpectedForm';
import UncontrolledForm from './UncontrolledForm';

class ReactExamples extends React.Component {
  render() {
    return (
      <div className="container row">
        <ExpectedForm />
        <UncontrolledForm />
        <ControlledForm />
      </div>
    );
  }
}

export default ReactExamples;
