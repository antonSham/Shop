import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

const dataReducer = (state=[], action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

const loadingReducer = (state=false, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return true;
    case GET_ITEMS_SUCCESS:
    case GET_ITEMS_FAILURE:
      return false;
    default:
      return state;
  }
}

const errorReducer = (state='', action) => {
  switch (action.type) {
    case GET_ITEMS_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const items = (state = {}, action) => {
  return {
    data: dataReducer(state.data, action),
    loading: loadingReducer(state.loading, action),
    error: errorReducer(state.error, action)
  }
}
