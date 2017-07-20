import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  CHANGE_SEARCH_REQUEST,
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

const search = (data, request) =>
  request === undefined || request === ""
    ? []
    : data
        .filter(
          el =>
            el.name
              .toLowerCase()
              .replace(/\s+/g, " ")
              .indexOf(request.toLowerCase()) !== -1
        )
        .map(el => el.id);
const initSearchState = {
  items: [],
  request: "",
  searchedItems: []
};
const searchReducer = (state = initSearchState, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.data.map(el => ({ id: el.id, name: el.name })),
        searchedItems: search(
          action.data.map(el => ({ id: el.id, name: el.name })),
          state.request
        )
      };
    case CHANGE_SEARCH_REQUEST:
      return {
        ...state,
        request: action.request
      };
    case SEARCH:
      return {
        ...state,
        searchedItems: search(
          state.items,
          state.request
        )
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
    search: searchReducer(state.search, action)
  };
};
