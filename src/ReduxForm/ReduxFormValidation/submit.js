import { SubmissionError } from 'redux-form';

import store from '../store';
import { saveForm } from '../actions';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(500) // simulate server latency
    .then(() => {
      if (values.input.match(/[0-9]/)) {
        throw new SubmissionError({
          input: 'Input cannot contain a number',
          _error: 'Input cannot contain a number'
        });
      } else {
        store.dispatch(saveForm(values));
      }
    })
}

export default submit
