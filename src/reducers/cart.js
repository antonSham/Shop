import {
  ADD_TO_CART, POP_FROM_CART,
  INCREASE_QUANTITY, REDUCE_QUANTITY
} from '../actions/index.js'

const addToCart = (state = [], action) => (
  state.filter(
    (item) => (item.id === action.id)
  ).length === 0
  ?
  [
    ...state,
    {
      id: action.id,
      quantity: 1
    }
  ]
  :
  [
    ...state
  ]
);

const popFromCart = (state = [], action) => (
  state.filter(
    (item) => (item.id !== action.id)
  )
);

const increaseQuantity = (state = [], action) => (
  state.map(
    (item) => (
      item.id === action.id
      ?
      {
        ...item,
        quantity: item.quantity + 1
      }
      :
      item
    )
  )
)

const reduceQuantity = (state = [], action) => (
  state.map(
    (item) => (
      item.id === action.id
      ?
      {
        ...item,
        quantity: Math.max(1, item.quantity - 1)
      }
      :
      item
    )
  )
)

export const cart = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case POP_FROM_CART:
      return popFromCart(state, action);
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action);
    case REDUCE_QUANTITY:
      return reduceQuantity(state, action);
    default:
      return ((state = []) => (state))(state);
  }
}
