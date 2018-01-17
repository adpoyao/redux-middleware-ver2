'use strict';

import { INCREMENT, PAUSE } from '../actions/actionType';

const initialState = {
  counter: 0
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter += 1
      });
    case PAUSE:
      return state
  }
  return state
}