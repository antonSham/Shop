export const GET_ITEMS = "GET_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";

export const getItems = () => ({ type : GET_ITEMS})

export const addToCart = (id) => ({ type: ADD_TO_CART, id: id})
