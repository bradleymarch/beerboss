const initialState = {
  beerList: [],

};

const addSpecificBeerReducer = (state=initialState, action) => {
    if (action.type === 'ADD_SPECIFIC_BEER') {
      console.log(action)
          return {
            ...state,
            beerList: action.addedBeer
          }
      }
      else {
      return state;
      }
};

export default addSpecificBeerReducer
