import { itemsApp } from '../reducers/items.js'
import { cartApp } from '../reducers/cart.js'

const initialState = {
    items: [],
    loaded: false,
    cart_items: []
}

export const todoApp = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  newState = itemsApp(newState, action);
  newState = cartApp(newState, action);
  return newState;
}
