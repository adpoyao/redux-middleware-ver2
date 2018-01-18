'use strict';

import { START_INCREMENT, INCREMENT, PAUSE, DELAY_INCREMENT } from '../actions/actionType';

const initialState = {
  counter: 0
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case START_INCREMENT:
      return state;

    case INCREMENT:
      return Object.assign({}, state, {
        counter: 1
      });

    case PAUSE:
      return state;
      
    case DELAY_INCREMENT:
    return state;
  }
  return state
}