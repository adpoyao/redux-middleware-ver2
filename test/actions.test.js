'use strict';
import { helloWorld, increment, pause } from '../actions';
import { HELLO_WORLD, INCREMENT, PAUSE } from '../actions/actionType';

describe('helloWorld action', () => {
  it('should return expected type', () => {
    const expectedAction = {
      type: HELLO_WORLD
    }
    expect(helloWorld()).toEqual(expectedAction)
  })
})

describe('increment action', () => {
  it('should return expected type', () => {
    const expectedAction = {
      type: INCREMENT,
    }
    expect(increment()).toEqual(expectedAction);
  })
})

describe('pause action', () => {
  it('should return expected type', () => {
    const expectedAction = {
      type: PAUSE,
    }
    expect(pause()).toEqual(expectedAction);
  })
})