import {
  ADD_TO_CART,
  POP_FROM_CART,
  INCREASE_QUANTITY,
  REDUCE_QUANTITY
} from "../actions/index.js";

const itemInCart = (items, id) =>
  items.filter(item => item.id === id).length > 0;

const itemReducer = (state = {}, action) => {
  if (state.id !== action.id) {
    return state;
  }

  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1
      };
    case REDUCE_QUANTITY:
      return {
        ...state,
        quantity: Math.max(1, state.quantity - 1)
      };
    default:
      return state;
  }
};

export const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (itemInCart(state, action.id)) {
        return state;
      }

      return state.concat({
        id: action.id,
        quantity: 1
      });
    case POP_FROM_CART:
      return state.filter(item => item.id !== action.id);
    case INCREASE_QUANTITY:
    case REDUCE_QUANTITY:
      return state.map(item => itemReducer(item, action));
    default:
      return state;
  }
};
