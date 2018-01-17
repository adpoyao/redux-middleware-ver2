'use strict';

import { reducer as helloWorldReducer } from '../reducers/helloWorld';
import { reducer as incrementReducer } from '../reducers/increment';
import { HELLO_WORLD, INCREMENT, PAUSE } from '../actions/actionType';
import { hellowWorld, increment, pause } from '../actions';

describe('helloWorld reducer', () => {
  it('should return the initial state', () => {
    expect(helloWorldReducer(undefined, {})).toEqual(
      {
        display: 'Silence...'
      }
    )
  })

  it('should handle HELLO_WORLD', () => {
    const initialState = {
      display: 'Silence...'
    }
    expect(
      helloWorldReducer(initialState, {
        type: HELLO_WORLD
      })
    ).toEqual(
      {
        display: 'Hello World',
      }
    )
  })
})

describe('increment reducer', () => {
  it('should return the initial state', () => {
    expect(incrementReducer(undefined, {})).toEqual({
        counter: 0
      }
    )
  })
})