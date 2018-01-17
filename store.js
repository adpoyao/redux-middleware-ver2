'use strict';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/helloWorld'

const customMiddleware = store => next => action => {
  console.log("Middleware triggered:" , action);
  next(action);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(customMiddleware)),
);