'use strict';

import { HELLO_WORLD } from '../actions/actionType';

const initialState = {
  display: 'Silence...'
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case HELLO_WORLD:
      return Object.assign({}, state, {
        display: 'Hello World'
      });
  }
  return state
}