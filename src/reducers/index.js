import { combineReducers } from 'redux'
import { items } from '../reducers/items.js'
import { cart } from '../reducers/cart.js'

const initialState = {
    items: {
      data: [],
      loaded: false,
      loading: false,
      error: ""
    },
    cart: [{
      id : 1,
      quantity: 4
    }],
}

// export const App = combineReducers({
//   items,
//   cart
// })

export const App = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  newState = items(newState, action);
  newState = cart(newState, action);
  return newState;
}
