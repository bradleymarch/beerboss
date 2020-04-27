const initialState = {
  breweries: [],

};

const breweryReducer = (state=initialState, action) => {
  if (action.type === 'FETCH_BREWERY_SUCCESS') {

    return {
      ...state,
      breweries: action.localBreweries,
    }
  }
  if (action.type === 'CLEAR_BREWERY_RESULTS') {
    return {
      ...state,
      breweries: [],
    }
  }
  else {
    return state
  }
};

export default breweryReducer
