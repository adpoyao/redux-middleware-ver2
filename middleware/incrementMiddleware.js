import store from '../store';

import { reducer as helloWorldReducer } from '../reducers/helloWorld';
import { reducer as incrementReducer } from '../reducers/increment';

import { helloWorld, startIncrement, increment, pause } from '../actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

export const incrementMiddleware = ({ dispatch, getState }) => next => action => {
  let interval;
  if (action.type === START_INCREMENT) {
    return store.dispatch(increment());
  } else if (action.type === PAUSE) {
    return clearInterval(interval);
  }
  return next(action);
}

export default incrementMiddleware;
