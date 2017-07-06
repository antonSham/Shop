import { ADD_TO_CART, POP_FROM_CART } from '../actions/index.js'

export const cartApp = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign( {}, state, {
        cart_items : [
          ...state.cart_items,
          ...state.items.filter((item) => (
            item.id === action.id &&
            state.cart_items.reduce( (last, current) => (
              last && current.id !== action.id
            ), true)
          ))
          .map( (item) => ({
            id : item.id,
            quantity: 1
          }))
        ]
      });
    case POP_FROM_CART:
      return Object.assign( {}, state, {
        cart_items : state.cart_items.filter((item) => (
          item.id !== action.id
        ))
      });
    default:
      return state;
  }
}
