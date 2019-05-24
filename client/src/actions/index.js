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

const ADD_BEERS_TO_DB = 'ADD_BEER_TO_DB';
const addBeersToDb = addBeer => ({
  type: ADD_BEERS_TO_DB,
  addBeer
})

export const CLEAR_BEER_RESULTS = 'CLEAR_BEER_RESULTS';
export const clearBeerResults = () => ({
  type: CLEAR_BEER_RESULTS,
})

export const CLEAR_BREWERY_RESULTS = 'CLEAR_BREWERY_RESULTS';
export const clearBreweryResults = () => ({
  type: CLEAR_BREWERY_RESULTS,
})

const SAVE_RATING_SUCCESS = 'SAVE_RATING_SUCCESS'
const saveRatingSuccess = (beerRating, beerScore) => ({
  type: SAVE_RATING_SUCCESS,
  beerRating, beerScore
})

const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS'
const addNoteSuccess = (beerRating, beerNote) => ({
  type: ADD_NOTE_SUCCESS,
  beerRating, beerNote
})

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = registeredUser => ({
  type: REGISTER_USER_SUCCESS,
  registeredUser
})

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = loggedInUser => ({
  type: LOGIN_USER_SUCCESS,
  loggedInUser
})

export const GET_LOGGEDIN_USER = 'GET_LOGGEDIN_USER';
export const getLoggedinUser = user => ({
  type: GET_LOGGEDIN_USER,
  user
})

const DELETE_TO_TRY_SUCCESS = 'DELETE_TO_TRY_SUCCESS';
const deleteToTrySuccess = toTrylistItem  => ({
  type: DELETE_TO_TRY_SUCCESS,
  toTrylistItem
})

const DELETE_FAVE_SUCCESS = 'DELETE_FAVE_SUCCESS';
const deleteFaveSuccess = faveListItem  => ({
  type: DELETE_FAVE_SUCCESS,
  faveListItem
})

export const fetchLocalBrewery = (locationInput) => (dispatch) => {
    axios.post('/api/brewery-results', {
      location: locationInput,

      })
      .then(function (response) {
        return response;
      })
      .then(localBreweries => {
          dispatch(fetchBrewerySuccess(localBreweries));
      })
      .catch(function (error) {
        console.log(error);
      });
};

export const fetchSpecificBeer = (beerInput) => (dispatch) => {
  console.log('before');
  axios.get(`/api/beer-results?nameInput=${beerInput}`)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .then(specificBeer => {
        dispatch(fetchBeerSuccess(specificBeer.data.data));
        console.log('after');

    })
    .catch(function (error) {
      console.log(error);
    });
};

export const addBeerToDb = (value) => (dispatch) => {
  axios.post('/api/users/beerlist', {
    beerlist: value
  })
  .then(response => {
    return response;
  })
  .then(addBeer => {
    dispatch(addBeersToDb(addBeer.data.data));
    // setTimeout(function(){return location.href = '/dashboard'}, 1000);
    axios.get('/api/users/me')
    .then(response => {
      return response;
    })
    .then(response => {
      dispatch(getLoggedinUser(response.data.user));
    })
  })
  .catch(error => {
    console.log(error);
  });
};

export const saveRating = (beerRating, beerScore, beerNote) => (dispatch) => {
  axios.post('/api/users/rating', {
    beerRating: beerRating,
    beerScore: beerScore,
    beerNote: beerNote
  })
  .then(response => {
    return response;
  })
  .then(response => {
    dispatch(saveRatingSuccess(beerRating.data.user, beerScore.data.user, beerNote.data.user));
  })
  .catch(error => {
    console.log(error);
  });
}

export const addNote = (beerRating, beerNote) => (dispatch) => {
  axios.post('/api/users/note', {
    beerRating: beerRating,
    beerNote: beerNote
  })
  .then(response => {
    return response;
  })
  .then(beerRating => {
    dispatch(addNoteSuccess(beerRating.data.user, beerNote.data.user));
  })
  .catch(error => {
    console.log(error);
  });
}

export const deleteToTry = (value) => (dispatch) => {
  axios.post('/api/delete-to-try', {
    beerlist: value
  })
  .then(response => {
    return response;
  })
  .then(response => {
    dispatch(deleteToTrySuccess(response));
  })
  .catch(error => {
    console.log(error);
  });
}

export const deleteFave = (name, beerScore) => (dispatch) => {
  axios.post('/api/delete-fave', {
    beerRating: {name: name, beerScore: beerScore}
  })
  .then(response => {
    return response;
  })
  .then(response => {
    dispatch(deleteFaveSuccess(response));
  })
  .catch(error => {
    console.log(error);
  });
}

export const registerUser = (usernameInput, passwordInput) => (dispatch) => {
    axios.post('/api/users/register', {
      username: usernameInput,
      password: passwordInput,
      })
      .then(function (response) {
        return response;
      })
      .then(registeredUser => {
          dispatch(registerUserSuccess(registeredUser));
          setTimeout(function(){return location.href = '/login'}, 1000);
      })
      .catch(function (error) {
        alert('Error occurred.  Please try again.')
        console.log(error);
      });
};

export const loginUser = (usernameInput, passwordInput) => (dispatch) => {
    axios.post('/api/users/login', {
      username: usernameInput,
      password: passwordInput,
      })
      .then(response => {
        return response;
      })
      .then(loggedInUser => {
          dispatch(loginUserSuccess(loggedInUser));
          setTimeout(function(){return location.href = '/dashboard'}, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
};

export const getUser = () => (dispatch) => {

  axios.get('/api/users/me')
  .then(response => {
    return response;
  })
  .then(response => {
    dispatch(getLoggedinUser(response.data.user));
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const logout = () => (dispatch) => {
  axios.get('/api/logout')
  .then(response => {
    return response;
  })
  .then(() => {
    window.location.href='/'
  })
  .catch(error => {
    console.log(error);
  });
};

export const deleteUser = () => (dispatch) => {
  axios.get('/api/users/me')
  .then(response => {
    return response;
  })
  .then(response => {
    console.log(response);
    axios.delete('/api/user', {data: response.data.user})
    .then(response => {
      alert("Your account has been deleted")
      return response;
    })
    .then(() => {
      window.location.href='/'
    })
  })
  .catch(error => {
    console.log(error);
  });
};
