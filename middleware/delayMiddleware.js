import store from '../store';

const delayMiddleware = store => next => action => {
  if (action.type === INCREMENT) {
    let interval = setInterval(() => store.dispatch(increment()), 1000);
  } else if (action.type === PAUSE) {
    clearInterval(interval);
  }

  next(action);
};

export default delayMiddleware;
