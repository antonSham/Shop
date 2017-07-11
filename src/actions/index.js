export const GET_ITEMS = "GET_ITEMS";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";
export const POP_FROM_CART = "POP_FROM_CART";
export const INCREASE_QUANTITY = "QUANTITY_INCREASE";
export const REDUCE_QUANTITY = "QUANTITY_REDUCE";

const getItemsSuccess = data => ({ type: GET_ITEMS_SUCCESS, data });

const getItemsFailure = error => ({ type: GET_ITEMS_FAILURE, error });

const syncGetItems = () => ({ type: GET_ITEMS });

export const getItems = () => dispatch => {
  dispatch(syncGetItems());
  return fetch("http://localhost:3004/items")
    .then(response => response.json())
    .then(responseJson => dispatch(getItemsSuccess(responseJson)))
    .catch(err => dispatch(getItemsFailure(err.message + err.stack)));
};

export const addToCart = id => ({ type: ADD_TO_CART, id });

export const popFromCart = id => ({ type: POP_FROM_CART, id });

export const increaseQuantity = id => ({ type: INCREASE_QUANTITY, id });

export const reduceQuantity = id => ({ type: REDUCE_QUANTITY, id });
