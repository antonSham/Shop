import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  SEARCH
} from "../actions/index.js";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return true;
    case GET_ITEMS_SUCCESS:
    case GET_ITEMS_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case GET_ITEMS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const search = (data, request) => (
  data
    .filter(
      el =>
        el.name
          .toLowerCase()
          .replace(/\s+/g, " ")
          .indexOf(request.toLowerCase()) !== -1
    )
    .map(el => el.id)
);

const searchReducer = (
  state = { request: "", answer: [] },
  action,
  data
) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        request: action.request,
        answer: search(data, action.request)
      }
    default:
      return state;
  }
};

export default (state = {}, action) => {
  return {
    data: dataReducer(state.data, action),
    loading: loadingReducer(state.loading, action),
    error: errorReducer(state.error, action),
    search: searchReducer(state.search, action, state.data)
  };
};
