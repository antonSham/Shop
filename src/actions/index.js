export const GET_ITEMS = "GET_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const POP_FROM_CART = "POP_FROM_CART";
export const INCREASE_QUANTITY = "QUANTITY_INCREASE";
export const REDUCE_QUANTITY = "QUANTITY_REDUCE";

export const getItems = () => ({ type : GET_ITEMS})

export const addToCart = (id) => ({ type: ADD_TO_CART, id: id})

export const popFromCart = (id) => ({ type: POP_FROM_CART, id: id})

export const increaseQuantity = (id) => ({ type: INCREASE_QUANTITY, id: id})

export const reduceQuantity = (id) => ({ type: REDUCE_QUANTITY, id: id})
