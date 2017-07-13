import { THROW_ERROR, POP_ERROR } from "../actions/index.js";

export default (state = [], action) => {
  switch (action.type) {
    case THROW_ERROR:
      return state.concat({
        errorMessage: action.errorMessage
      });
    case POP_ERROR:
      return state.slice(0, action.id).concat(state.slice(action.id + 1));
    default:
      return state;
  }
};
