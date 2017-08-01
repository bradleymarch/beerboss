import axios from 'axios'
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const fetchBrewerySuccess = localBreweries => ({
    type: FETCH_BREWERY_SUCCESS,
    localBreweries
});
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const fetchBeerSuccess = specificBeer => ({
  type: FETCH_BEER_SUCCESS,
  specificBeer
})

export const ADD_SPECIFIC_BEER = 'ADD_SPECIFIC_BEER';
export const addSpecificBeer = addedBeer => ({
  type: ADD_SPECIFIC_BEER,
  addedBeer
})

export const CLEAR_BEER_RESULTS = 'CLEAR_BEER_RESULTS';
export const clearBeerResults = () => ({
  type: CLEAR_BEER_RESULTS,
})

export const CLEAR_BREWERY_RESULTS = 'CLEAR_BREWERY_RESULTS';
export const clearBreweryResults = () => ({
  type: CLEAR_BREWERY_RESULTS,
})



export const fetchLocalBrewery = (locationInput) => (dispatch) => {
console.log(locationInput);
    axios.post('/api/brewery-results', {
      location: locationInput,

      })
      .then(function (response) {
        return response;
      })
      .then(localBreweries => {
        console.log(localBreweries)
          dispatch(fetchBrewerySuccess(localBreweries));
      })
      .catch(function (error) {
        console.log(error);
      });
};

export const fetchSpecificBeer = (beerInput) => (dispatch) => {

  axios.get(`/api/beer-results?nameInput=${beerInput}`)
    .then(function (response) {
      return response;
    })
    .then(specificBeer => {

        dispatch(fetchBeerSuccess(specificBeer.data.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
