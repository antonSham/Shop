import { combineReducers } from 'redux'
import { items } from '../reducers/items.js'
import { cart } from '../reducers/cart.js'

export const App = combineReducers({
  items,
  cart
})
