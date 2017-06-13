import { combineReducers } from 'redux'
import counter from './counter/reducer'
import todolist from './todolist/reducer'

const rootReducer = combineReducers({
  counter, todolist
})

export default rootReducer
