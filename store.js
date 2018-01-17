'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as helloWorldReducer } from './reducers/helloWorld';
import { reducer as incrementReducer } from './reducers/increment';

import { helloWorld, startIncrement, increment, pause } from './actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE } from './actions/actionType';

const delayMiddleware = store => next => action => {
  if (action.type === START_INCREMENT) {
    let interval = setInterval(() => store.dispatch(increment()), 1000);
  } else if (action.type === PAUSE) {
    clearInterval(interval);
  }
  return next(action);
}

const store = createStore(
  combineReducers({
    helloWorld: helloWorldReducer,
    Counter: incrementReducer
  }),
  composeWithDevTools(applyMiddleware(delayMiddleware)),
);

export default store;