import {
  ADD_TO_CART, POP_FROM_CART,
  INCREASE_QUANTITY, REDUCE_QUANTITY
} from '../actions/index.js'

const initialState = {
    cart: [{
      id : 1,
      quantity: 4
    }]
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign( {}, state, {
        cart : (
          state.cart.filter(
            (item) => (item.id === action.id)
          ).length === 0
          ?
          [
            ...state.cart,
            {
              id: action.id,
              quantity: 1
            }
          ]
          :
          [
            ...state.cart
          ]
        )
      });
    case POP_FROM_CART:
      return Object.assign( {}, state, {
        cart :
          state.cart.filter(
            (item) => (item.id !== action.id)
          )
      });
    case INCREASE_QUANTITY:
      return Object.assign( {}, state, {
        cart :
          state.cart.map(
            (item) => (
              item.id === action.id
              ?
              Object.assign({}, item, {
                quantity: item.quantity + 1
              })
              :
              item
            )
          )
      });
    case REDUCE_QUANTITY:
      return Object.assign( {}, state, {
        cart :
          state.cart.map(
            (item) => (
              item.id === action.id
              ?
              Object.assign({}, item, {
                quantity: Math.max(1, item.quantity - 1)
              })
              :
              item
            )
          )
      });
    default:
      return state;
  }
}
