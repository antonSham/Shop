import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

const initialState = {
      data: [],
      loaded: false,
      loading: false,
      error: ""
}

export const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign( {}, state, {
          loading: true
      });
    case GET_ITEMS_SUCCESS:
      return Object.assign( {}, state, {
          data: action.data,
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
