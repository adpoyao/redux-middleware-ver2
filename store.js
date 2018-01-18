'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as helloWorldReducer } from './reducers/helloWorld';
import { reducer as incrementReducer } from './reducers/increment';

import { helloWorld, startIncrement, increment, pause, delayIncrement } from './actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE, DELAY_INCREMENT } from './actions/actionType';

import incrementMiddleware from './middleware/incrementMiddleware';
import { delayMiddleware } from './middleware/delayMiddleware';

const store = createStore(
  combineReducers({
    helloWorld: helloWorldReducer,
    counter: incrementReducer
  }),
  composeWithDevTools(applyMiddleware(delayMiddleware, incrementMiddleware)),
);

export default store;