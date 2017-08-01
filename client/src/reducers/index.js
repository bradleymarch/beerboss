import { combineReducers } from 'redux'
import breweryReducer from './brewery'
import specificBeerReducer from './beer'
import addSpecificBeerReducer from './addBeer'


const rootReducer = combineReducers({
  breweryReducer,
  specificBeerReducer,
  addSpecificBeerReducer

})

export default rootReducer
