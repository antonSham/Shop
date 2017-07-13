export const GET_ITEMS = "GET_ITEMS";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";
export const POP_FROM_CART = "POP_FROM_CART";
export const INCREASE_QUANTITY = "QUANTITY_INCREASE";
export const REDUCE_QUANTITY = "QUANTITY_REDUCE";
export const THROW_ERROR = "THROW_ERROR";
export const POP_ERROR = "POP_ERROR";

export const getItems = () => ({ type: GET_ITEMS });

export const getItemsSuccess = data => ({ type: GET_ITEMS_SUCCESS, data });

export const getItemsFailure = error => ({ type: GET_ITEMS_FAILURE, error });

export const addToCart = id => ({ type: ADD_TO_CART, id });

export const popFromCart = id => ({ type: POP_FROM_CART, id });

export const increaseQuantity = id => ({ type: INCREASE_QUANTITY, id });

export const reduceQuantity = id => ({ type: REDUCE_QUANTITY, id });

export const throwError = errorMessage => ({ type: THROW_ERROR, errorMessage });

export const popError = id => ({ type: POP_ERROR, id });
