import items from "../items.js";
import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
} from "../../actions/index.js";

describe("Get items", () => {
  it("Get items default", () => {
    expect(items(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: "",
      searchRequest: ""
    });
  });

  it("Get items", () => {
    expect(
      items(
        {
          data: [],
          loading: false,
          error: "",
          searchRequest: ""
        },
        {
          type: GET_ITEMS
        }
      )
    ).toEqual({
      data: [],
      loading: true,
      error: "",
      searchRequest: ""
    });
  });

  it("Get items success", () => {
    expect(
      items(
        {
          data: [],
          loading: true,
          error: "",
          searchRequest: ""
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
      searchRequest: ""
    });
  });

  it("Get items failure", () => {
    expect(
      items(
        {
          data: [],
          loading: true,
          error: "",
          searchRequest: ""
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
      searchRequest: ""
    });
  });
});
