'use strict';

import { reducer } from '../reducers'
import { HELLO_WORLD } from '../actions/actionType';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
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
      reducer(initialState, {
        type: HELLO_WORLD
      })
    ).toEqual(
      {
        display: 'Hello World',
      }
    )
  })
})