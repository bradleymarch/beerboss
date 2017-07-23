import axios from 'axios'
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const fetchBrewerySuccess = localBreweries => ({
    type: FETCH_BREWERY_SUCCESS,
    localBreweries
});
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const fetchBeerSuccess = SpecificBeer => ({
  type: FETCH_BEER_SUCCESS,
  SpecificBeer
})

export const fetchLocalBrewery = (userInput) => (dispatch) => {
console.log('hi');
    // fetch('/api/brewery-results', {
    //     method: "POST",
    //     body: {location: userInput},
    //
    // })
    // .then(response => {
    //   //  if (!response.ok) {
    //   //         return Promise.reject(response.statusText);
    //   //       }
    //   console.log('yo');
    //     return response.json();
    //
    // })
    // .then(LocalBreweries => {
    //   console.log(LocalBreweries)
    //     dispatch(fetchBrewerySuccess(LocalBreweries));
    // });
    axios.post('/api/brewery-results', {
      location: userInput
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
//
// export const fetchSpecificBeer = (SpecificBeer) => (dispatch, res) => {
// console.log('yo');
//     fetch('/beer-results', {
//         method: "GET",
//         data: JSON.stringify(`${res.json}`),
// })
//     .then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return `${res.json}`;
//     }).then(SpecificBeer => {
//       console.log(SpecificBeer);
//         //dispatch(fetchSpecificBeer(SpecificBeer));
//     });
// };
