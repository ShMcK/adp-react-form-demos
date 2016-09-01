import React from 'react';
import { Provider } from 'react-redux';

import ReduxFormSimple from './ReduxFormSimple';
import ReduxSaveForm from './ReduxSaveForm';

import store from './store';

class ReduxFormExamples extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container row">
          <ReduxFormSimple />
          <ReduxSaveForm />
        </div>
      </Provider>
    );
  }
}

export default ReduxFormExamples;
