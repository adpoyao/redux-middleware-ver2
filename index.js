'use strict';

import store from './store';
import { helloWorld } from './actions';

store.subscribe(renderScreen);
store.dispatch(helloWorld);
console.log(store.getState());

function renderScreen() {
  const state = store.getState();
  let display = state.display;
  return (
    `<h1>${display}</h1>`
  );
  // $('.display').html(display)
}

$('#helloWorld').onClick(()=>{
  store.dispatch(helloWorld());
});

$(() => { 
  renderScreen();
});