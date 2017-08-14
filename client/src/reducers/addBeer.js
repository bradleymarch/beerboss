const initialState = {
  beerlist: []

};

const addSpecificBeerReducer = (state=initialState, action) => {
  if (action.type === 'ADD_SPECIFIC_BEER') {

    return {
      ...state,

      beerlist: [...state.beerlist, action.addedBeer],
    }
  }
  else {
    return state;
  }
};

export default addSpecificBeerReducer
