import React from 'react';
import { Provider } from 'react-redux';

import ReduxFormSimple from './ReduxFormSimple';
import ReduxFormSave from './ReduxFormSave';
import ReduxFormValidation from './ReduxFormValidation';

import store from './store';

class ReduxFormExamples extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container row">
          <ReduxFormSimple />
          <ReduxFormSave />
          <ReduxFormValidation />
        </div>
      </Provider>
    );
  }
}

export default ReduxFormExamples;
