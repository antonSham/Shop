import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

const initialState = {
    items: {
      data: [],
      loaded: false,
      loading: false,
      error: ""
    }
}

export const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign( {}, state, {
        items: Object.assign( {}, state.items, {
          loading: true
        })
      });
    case GET_ITEMS_SUCCESS:
      return Object.assign( {}, state, {
        items: Object.assign( {}, state.items, {
          data: action.data,
          loaded: true,
          loading: false
        })
      });
    case GET_ITEMS_FAILURE:
      return Object.assign( {}, state, {
        items: Object.assign( {}, state.items, {
          error: action.error,
          loading: false
        })
      });
    default:
      return state;
  }
}
