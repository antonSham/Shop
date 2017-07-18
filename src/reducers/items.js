import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  GET_SEARCH_PREVIEW,
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


const getItemNameById = (id, data) => {
  if (id === 'undefined') {
    return "";
  }
  const filtred = data.filter( el => el.id === id);
  if (filtred.length === 0) {
    return "";
  }
  return filtred[0].name;
}

const searchReducer = (
  state = { request: "", preview: "", answer: [] },
  action,
  data
) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        answer: search(data, action.request),
        request: action.request
      }
    case GET_SEARCH_PREVIEW:
      return {
        ...state,
        preview: getItemNameById(
                    search(data, action.request)[0],
                    data
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
    search: searchReducer(state.searchPreview, action, state.data)
  };
};
