import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { saveFormReducer } from './reducers';

const reducers = {
  saved: saveFormReducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
