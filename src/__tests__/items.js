import items from "../reducers/items.js";
import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
} from "../actions/index.js";

describe("Get items", () => {
  it("Get items default", () => {
    expect(items(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: "",
      search: {
        request: "",
        preview: "",
        answer: []
      }
    });
  });

  it("Get items", () => {
    expect(
      items(
        {
          data: [],
          loading: false,
          error: "",
          search: {
            request: "",
            preview: "",
            answer: []
          }
        },
        {
          type: GET_ITEMS
        }
      )
    ).toEqual({
      data: [],
      loading: true,
      error: "",
      search: {
        request: "",
        preview: "",
        answer: []
      }
    });
  });

  it("Get items success", () => {
    expect(
      items(
        {
          data: [],
          loading: true,
          error: "",
          search: {
            request: "",
            preview: "",
            answer: []
          }
        },
        {
          type: GET_ITEMS_SUCCESS,
          data: [{ id: 1 }, { id: 2 }]
        }
      )
    ).toEqual({
      data: [{ id: 1 }, { id: 2 }],
      loading: false,
      error: "",
      search: {
        request: "",
        preview: "",
        answer: []
      }
    });
  });

  it("Get items failure", () => {
    expect(
      items(
        {
          data: [],
          loading: true,
          error: "",
          search: {
            request: "",
            preview: "",
            answer: []
          }
        },
        {
          type: GET_ITEMS_FAILURE,
          error: "Something went wrong"
        }
      )
    ).toEqual({
      data: [],
      loading: false,
      error: "Something went wrong",
      search: {
        request: "",
        preview: "",
        answer: []
      }
    });
  });
});
