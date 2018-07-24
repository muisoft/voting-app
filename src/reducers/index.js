import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import vote  from './vote';
export default combineReducers({
  vote,
  router: routerReducer
})
