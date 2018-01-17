'use strict';
import store, { delayMiddleware } from '../store';

import { startIncrement, increment, pause } from '../actions';
import { START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

describe('delayMiddelware', () => {
  it('should increase counter every second upon Increment action invokation', () => {
      delayMiddleware(store)(next)(increment())
      return setTimeout(function(){return pause()}, 2000)
      .then(result => {
        expect(result).toEqual(2)
      });
  })
});