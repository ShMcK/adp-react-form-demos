import React from 'react';
import ReactDOM from 'react-dom';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ControlledForm />
        <UncontrolledForm />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
