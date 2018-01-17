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

  // Test 1
  // jest.useFakeTimers();
  // test('waits 2 seconds before calling pause', () => {
  //   const increment = require('../actions')
  // })
  // increment();
  // return setTimeout(pause(), 3000)
  // .then(() => expect(setInterval).toHaveBeenCalledTimes(3))
  
  // expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  // Test 2
  // it('should return the correct counter by middleware after waiting a specified time', () => {
  //   const initialState = {
  //     counter: 0
  //   }
  //   setTimeout(pause(), 2000);
  //   let total = incrementReducer(initialState, {
  //     type: INCREMENT
  //   })
  //   return total
  //   .then(data => {
  //     expect(data).toEqual({
  //       counter: 3
  //     })
  //   })
  // });

  // Test 3
  // it('should callback after increment actions', () => {
  //   const next = sinon.spy();
  //   const callback = sinon.spy();
  //   const middleware = newReportMiddleware({ callback, target: 3000});

  //   middleware({})(next)({ type: INCREMENT });
  //   middleware({})(next)({ type: PAUSE });
  // })
})