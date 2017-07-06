import { INCREASE_QUANTITY, REDUCE_QUANTITY } from '../actions/index.js'

export const quantityApp = (state, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return Object.assign( {}, state, {
        cart_items : state.cart_items.map( (item) => {
          if (item.id === action.id)
            return {
              ...item,
              quantity: item.quantity + 1
            }
          return item
        })
      });
    case REDUCE_QUANTITY:
    return Object.assign( {}, state, {
      cart_items : state.cart_items.map( (item) => {
        if (item.id === action.id)
          return {
            ...item,
            quantity: Math.max(1,item.quantity - 1)
          }
        return item
      })
    });
    default:
      return state;
  }
}
