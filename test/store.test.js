'use strict';
import store from '../store';
import incrementMiddleware from '../middleware/incrementMiddleware';

import { startIncrement, increment, pause } from '../actions';
import { START_INCREMENT, INCREMENT, PAUSE } from '../actions/actionType';

describe('incrementMiddleware', () => {
  const create = () => {
    const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
    };
    const next = jest.fn()
    
    const invoke = (action) => incrementMiddleware(store)(next)(action)
    
    return {store, next, invoke}
  };

  it('passed through non-function action', () => {
    const { next, invoke } = create()
    const action = increment()
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  });

  it('dispatches increment() upon startIncrement()', () => {
    const { store, invoke } = create()
    let invocation = invoke(startIncrement());
    expect(invocation).toEqual(increment());
  })
});