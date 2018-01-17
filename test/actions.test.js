'use strict';
import { helloWorld } from '../actions';
import { HELLO_WORLD } from '../actions/actionType';

describe('actions', () => {
  it('helloWorld action should return expected type', () => {
    const expectedAction = {
      type: HELLO_WORLD
    }
    expect(helloWorld()).toEqual(expectedAction)
  })
})