export const GET_ITEMS = "GET_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";

export const getItems = () => {
  return { type : GET_ITEMS}
}

export const addToCart = (id) => {
  return { type: ADD_TO_CART, id: id}
}
