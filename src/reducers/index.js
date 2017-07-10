import { itemsApp } from '../reducers/items.js'
import { cartApp } from '../reducers/cart.js'
import { quantityApp } from '../reducers/quantity.js'

const initialState = {
    items: [],
    loaded: false,
    loading: false,
    cart_items: [{
      id : 1,
      quantity: 4
    }],
    error: ""
}

export const todoApp = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  newState = itemsApp(newState, action);
  newState = cartApp(newState, action);
  newState = quantityApp(newState, action);
  return newState;
}
