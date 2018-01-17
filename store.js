'use strict';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/helloWorld'

const consoleLogMiddleware = store => next => action => {
  console.log("Middleware triggered:" , action);
  return next(action);
}

const delayMiddleware = store => next => action => {
  return setTimeout(() => {next(action);}, 3000);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(consoleLogMiddleware, delayMiddleware)),
);

export default store;