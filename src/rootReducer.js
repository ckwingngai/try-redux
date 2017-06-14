import { combineReducers } from 'redux'
import counter from './Counter/reducer'
import todolist from './TodoList/reducer'
import cartlist from './ShoppingCart/reducer'

const rootReducer = combineReducers({
  counter, todolist, cartlist
})

export default rootReducer
