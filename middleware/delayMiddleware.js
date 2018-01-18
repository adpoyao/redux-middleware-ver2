import store from '../store';

import { reducer as helloWorldReducer } from '../reducers/helloWorld';
import { reducer as incrementReducer } from '../reducers/increment';

import { helloWorld, startIncrement, increment, pause, delayIncrement } from '../actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE, DELAY_INCREMENT } from '../actions/actionType';

export const delayMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === DELAY_INCREMENT) {
    let start = function(){
      console.log('DELAYED #2!!')
      return store.dispatch(startIncrement())}
    return setTimeout(start, 0)
  }
  return next(action);
}

export default delayMiddleware;
