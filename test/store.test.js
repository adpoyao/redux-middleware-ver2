'use strict';
import store, { delayMiddleware } from '../store';

import { startIncrement, increment, pause } from '../actions';
import { START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

describe('delayMiddelware', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  const nextHandler = delayMiddleware(store);

  it('returns a function to handle next', () => {
    expect(nextHandler).toHaveLength(1);
    

    // delayMiddleware(store)(next)(increment())
    // return setTimeout(function(){return pause()}, 2000)
    // .then(result => {
    //   expect(result).toEqual(2)
    // });
  })
});