import {breweryReducer} from './index';

describe('breweryReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = breweryReducer(undefined, {});
    expect(state).toEqual({
      breweries: []
    });
  });
});
