import { combineReducers } from "redux";
import items from "../reducers/items.js";
import cart from "../reducers/cart.js";
import errors from "../reducers/errors.js";

export default combineReducers({
  items,
  cart,
  errors
});
