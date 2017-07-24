import React from 'react';

const initialState = {
  breweries: [],
  name: 'Brad'
};

const reducer = (state=initialState, action) => {
    if (action.type === 'FETCH_BREWERY_SUCCESS') {
      console.log(action)
          return {
            ...state,
            breweries: action.localBreweries
          }
      }
      else  {
      return state;
      }
};

export default reducer
