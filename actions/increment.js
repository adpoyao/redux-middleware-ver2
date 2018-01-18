import { START_INCREMENT, INCREMENT, PAUSE, DELAY_INCREMENT } from './actionType';

export const startIncrement = () => ({
  type: START_INCREMENT
});

export const increment = () => ({
  type: INCREMENT
});

export const pause = () => ({
  type: PAUSE
})

export const delayIncrement = () => ({
  type: DELAY_INCREMENT
})