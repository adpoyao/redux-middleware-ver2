'use strict';
import { helloWorld } from '../actions/helloWorld';

test('function \'helloWorld\' should return {type: HELLO_WORLD}', () => {
  expect(helloWorld()).toBe(
    expect.objectContaining({
      type: 'HELLO_WORLD'
    }));
});