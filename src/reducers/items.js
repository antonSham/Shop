import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

export const itemsApp = (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign( {}, state, {
        loading: true
      });
    case GET_ITEMS_SUCCESS:
      return Object.assign( {}, state, {
        items: action.data,
        loaded: true,
        loading: false
      });
    case GET_ITEMS_FAILURE:
      return Object.assign( {}, state, {
        error: action.error,
        loading: false
      });
    default:
      return state;
  }
}
