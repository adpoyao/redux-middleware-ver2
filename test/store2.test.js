'use strict';
import store from '../store';
import configureMockStore from 'redux-mock-store'
import incrementMiddleware from '../middleware/incrementMiddleware';

import { helloWorld, startIncrement, increment, pause, delayIncrement } from '../actions';
import { HELLO_WORLD, START_INCREMENT, INCREMENT, PAUSE, DELAY_INCREMENT } from '../actions/actionType';
import { reducer as incrementReducer } from '../reducers/increment';
import { delayMiddleware } from '../middleware/delayMiddleware';
import { setTimeout } from 'timers';

const middlewares = [incrementMiddleware, delayMiddleware];
const mockStore = configureMockStore(middlewares);

describe('incrementMiddleware', () => {
  it('should return actions that are not not specified by any middlewares (i.e. hellowWorld())', () => {
    const store = mockStore({display: ''});
    store.dispatch(helloWorld());
    expect(store.getActions()).toEqual([helloWorld()]);
  })

  it('should return +1 to counter if action is startIncrement()', () => {
    store.dispatch(startIncrement());
    let state = store.getState().counter.counter
    expect(state).toEqual(1);
  })

  it('should return +1 to counter if action is increment()', () => {
    store.dispatch(increment());
    let state = store.getState().counter.counter
    expect(state).toEqual(1);
  })

});

describe('delayMiddleware', () => {
  it('should return actions that are not not specified by any middlewares (i.e. hellowWorld())', () => {
    const store = mockStore({display: ''});
    store.dispatch(helloWorld());
    expect(store.getActions()).toEqual([helloWorld()]);
  })

});