import {fetchBrewerySuccess, FETCH_BREWERY_SUCCESS, fetchBeerSuccess,
   FETCH_BEER_SUCCESS addSpecificBeer,
   ADD_SPECIFIC_BEER, CLEAR_BEER_RESULTS,
    registerUserSuccess, REGISTER_USER_SUCCESS, getLoggedinUser, GET_LOGGEDIN_USER,
  loginUserSuccess, LOGIN_USER_SUCCESS} from './index'

describe('fetchBrewerySuccess', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(FETCH_BREWERY_SUCCESS);
    });
});
describe('fetchBeerSuccess', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(FETCH_BEER_SUCCESS);
    });
});
describe('addSpecificBeer', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(ADD_SPECIFIC_BEER);
    });
});
describe('clearBeerResults', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(CLEAR_BEER_RESULTS);
    });
});
describe('registerUserSuccess', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(REGISTER_USER_SUCCESS);
    });
});
describe('getLoggedinUser', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(GET_LOGGEDIN_USER);
    });
});
describe('loginUserSuccess', () => {
    it('Should return the action', () => {
        expect(action.type).toEqual(LOGIN_USER_SUCCESS);
    });
});
