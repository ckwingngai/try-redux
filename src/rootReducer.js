import { combineReducers } from 'redux'
import counter from './counter/counterReducers'
import todolist from './todolist/todolistReducers'

const rootReducer = combineReducers({
  counter, todolist
})

export default rootReducer
