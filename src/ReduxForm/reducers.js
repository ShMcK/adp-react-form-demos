import { SAVE_FORM } from './actions';

const defaultForm = {
  input: "Hello"
};

export function saveFormReducer(form = defaultForm, action) {
  switch(action.type) {
    case SAVE_FORM:
      console.log('saveFormReducer action: ', action);
      return action.payload.form;
    default:
      return form;
  }
}
