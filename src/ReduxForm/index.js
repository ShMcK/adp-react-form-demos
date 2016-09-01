import React from 'react';
import { Provider } from 'react-redux';
import ReduxFormSimple from './ReduxFormSimple';

import store from './redux';

class ReduxFormExamples extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container row">
          <ReduxFormSimple />
        </div>
      </Provider>
    );
  }
}

export default ReduxFormExamples;
