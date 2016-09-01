import React from 'react';
import ReactDOM from 'react-dom';
import ControlledForm from './ControlledForm';
import ExpectedForm from './ExpectedForm';
import UncontrolledForm from './UncontrolledForm';
import './index.css';

class App extends React.Component {
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
