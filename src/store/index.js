import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import services from './reducers/services';
import authenticate from './reducers/authenticate';

const reducer = combineReducers({ 
  services,
  authenticate,
  form: formReducer
});

const initState = {
  services: [],
  authenticate: false
};

export default createStore(reducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());