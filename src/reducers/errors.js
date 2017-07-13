import { THROW_ERROR, POP_ERROR } from "../actions/index.js";

export default (state = [], action) => {
  switch (action.type) {
    case THROW_ERROR:
      return state.concat({
        errorMessage: action.errorMessage
      });
    case POP_ERROR:
      return state.filter(el => state.indexOf(el) !== action.id);
    default:
      return state;
  }
};
