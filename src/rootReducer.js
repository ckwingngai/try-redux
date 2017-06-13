import { combineReducers } from 'redux'
import counter from './Counter/reducer'
import todolist from './TodoList/reducer'

const rootReducer = combineReducers({
  counter, todolist
})

export default rootReducer
