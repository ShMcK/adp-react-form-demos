import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ReactExamples from './React';
import ReduxFormExamples from './ReduxForm';

class App extends React.Component {
  render() {
    return (
      <div className="container row">
        <ReactExamples />
        <ReduxFormExamples />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
