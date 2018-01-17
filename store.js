'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as helloWorldReducer } from './reducers/helloWorld';
import { reducer as incrementReducer } from './reducers/increment';

import { helloWorld, startIncrement, increment, pause } from './actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE } from './actions/actionType';

import delayMiddleware from './middleware/delayMiddleware';

const store = createStore(
  combineReducers({
    helloWorld: helloWorldReducer,
    Counter: incrementReducer
  }),
  composeWithDevTools(applyMiddleware(delayMiddleware)),
);

export default store;