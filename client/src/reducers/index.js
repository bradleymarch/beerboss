import { combineReducers } from 'redux'
import breweryReducer from './brewery'
import specificBeerReducer from './beer'
import addSpecificBeerReducer from './addBeer'
import getUserReducer from './getUser'
import userCreatedReducer from './userCreated'

const rootReducer = combineReducers({
  breweryReducer,
  specificBeerReducer,
  addSpecificBeerReducer,
  getUserReducer,
  userCreatedReducer,

})

export default rootReducer
