import store from '../store';

import { reducer as helloWorldReducer } from '../reducers/helloWorld';
import { reducer as incrementReducer } from '../reducers/increment';

import { helloWorld, startIncrement, increment, pause } from '../actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

export const delayMiddleware = ({ dispatch, getState }) => next => action => {
  console.log('#1HELLO!!!');
  if (action.type === START_INCREMENT) {
    console.log('#2HELLO!!!');
    store.dispatch(increment());
    // let interval = setInterval(() => store.dispatch(increment()), 1000);
  } else if (action.type === PAUSE) {
    return clearInterval(interval);
  }
  return next(action);
}

export default delayMiddleware;
