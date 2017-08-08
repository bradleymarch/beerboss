import {breweryReducer} from './index';

describe('breweryReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = breweryReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            breweries: []
        });
    });
});
