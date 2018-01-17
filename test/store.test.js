'use strict';
import store from '../store';
import delayMiddleware from '../middleware/delayMiddleware';

import { startIncrement, increment, pause } from '../actions';
import { START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

describe('delayMiddleware', () => {
  const create = () => {
    const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    };
    const next = jest.fn()
    
    const invoke = (action) => delayMiddleware(store)(next)(action)
    
    return {store, next, invoke}
  };

  it('passed through non-function action', () => {
    const { next, invoke } = create()
    const action = {type: 'START_INCREMENT'}
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  });
});