import { combineReducers } from 'redux'
import name from './name'
import users from './users'

export default combineReducers({
  name,
  users
})