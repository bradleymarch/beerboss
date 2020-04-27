const initialState = {
  beers: [],

};

const specificBeerReducer = (state=initialState, action) => {
  if (action.type === 'FETCH_BEER_SUCCESS') {

    return {
      ...state,
      beers: action.specificBeer,
    }
  }

  if (action.type === 'CLEAR_BEER_RESULTS') {
    return {
      ...state,
      beers: [],
    }
  }
  else {
    return state;
  }
};

export default specificBeerReducer
