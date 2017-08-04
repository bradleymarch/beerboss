import { combineReducers } from 'redux'
import breweryReducer from './brewery'
import specificBeerReducer from './beer'
import addSpecificBeerReducer from './addBeer'
import getUserReducer from './getUser'

const rootReducer = combineReducers({
  breweryReducer,
  specificBeerReducer,
  addSpecificBeerReducer,
  getUserReducer

})

export default rootReducer
