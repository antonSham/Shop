export const GET_ITEMS = "GET_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const POP_FROM_CART = "POP_FROM_CART";

export const getItems = () => ({ type : GET_ITEMS})

export const addToCart = (id) => ({ type: ADD_TO_CART, id: id})

export const popFromCart = (id) => ({ type: POP_FROM_CART, id: id})
