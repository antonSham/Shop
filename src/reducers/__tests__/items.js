import items from "../items.js";
import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  CHANGE_SEARCH_REQUEST,
  SEARCH
} from "../../actions/index.js";

const initState = ({
  data: [],
  loading: false,
  error: "",
  search: {
    items: [],
    searchedItems: [],
    request: ""
  }
});

describe("Get items", () => {
  it("Get items default", () => {
    expect(
      items(
        undefined,
        {}
      )
    ).toEqual(
      initState
    );
  });

  it("Get items", () => {
    expect(
      items(
        {
          ...initState,
          loading: false
        },
        {
          type: GET_ITEMS
        }
      )
    ).toEqual({
      ...initState,
      loading: true
    });
  });

  it("Get items success", () => {
    expect(
      items(
        {
          ...initState,
          data: [],
          loading: true
        },
        {
          type: GET_ITEMS_SUCCESS,
          data: [
            { id: 1, name: "A", price: 100 },
            { id: 2, name: "B", price: 200 }
          ]
        }
      )
    ).toEqual({
      ...initState,
      data: [
        { id: 1, name: "A", price: 100 },
        { id: 2, name: "B", price: 200 }
      ],
      loading: false,
      search: {
        ...initState.search,
        items: [
          { id: 1, name: "A" },
          { id: 2, name: "B" }
        ]
      }
    });
  });

  it("Get items failure", () => {
    expect(
      items(
        {
          ...initState,
          loading: true,
          error: ""
        },
        {
          type: GET_ITEMS_FAILURE,
          error: "Something went wrong"
        }
      )
    ).toEqual({
      ...initState,
      loading: false,
      error: "Something went wrong"
    });
  });
});

describe("Search", () => {
  it("Get from empty data", () => {
    expect(
      items(
        {
          ...initState,
          search: {
            ...initState.search,
            request: ""
          }
        },
        {
          type: CHANGE_SEARCH_REQUEST,
          request: "alib"
        }
      )
    ).toEqual({
      ...initState,
      search: {
        ...initState.search,
        request: "alib"
      }
    })
  })

  it("One letter", () => {
    expect(
      items(
        {
          ...initState,
          search: {
            ...initState.search,
            items: [
              {id: 1, name:"Bike"},
              {id: 2, name:"Gun"},
              {id: 3, name:"Tobacco"},
              {id: 4, name:"Bomb"}
            ],
            searchedItems: [],
            request: "b"
          }
        },
        {
          type: SEARCH
        }
      )
    ).toEqual({
      ...initState,
      search: {
        ...initState.search,
        items: [
          {id: 1, name:"Bike"},
          {id: 2, name:"Gun"},
          {id: 3, name:"Tobacco"},
          {id: 4, name:"Bomb"}
        ],
        searchedItems: [1, 3, 4],
        request: "b"
      }
    })
  })

  it("Two letters", () => {
    expect(
      items(
        {
          ...initState,
          search: {
            ...initState.search,
            items: [
              {id: 1, name:"Bio"},
              {id: 2, name:"Gun"},
              {id: 3, name:"Tobo"},
              {id: 4, name:"Bomb"}
            ],
            searchedItems: [],
            request: "bO"
          }
        },
        {
          type: SEARCH
        }
      )
    ).toEqual({
      ...initState,
      search: {
        ...initState.search,
        items: [
          {id: 1, name:"Bio"},
          {id: 2, name:"Gun"},
          {id: 3, name:"Tobo"},
          {id: 4, name:"Bomb"}
        ],
        searchedItems: [3, 4],
        request: "bO"
      }
    })
  })

  it("Word spacing", () => {
    expect(
      items(
        {
          ...initState,
          search: {
            ...initState.search,
            items: [
              {id: 1, name:"Black bike"},
              {id: 2, name:"Black\nbun"},
              {id: 3, name:"White tobacco"},
              {id: 4, name:"Black\tbomb"},
              {id: 5, name:"Black  bool"}
            ],
            searchedItems: [],
            request: "black b"
          }
        },
        {
          type: SEARCH
        }
      )
    ).toEqual({
      ...initState,
      search: {
        ...initState.search,
        items: [
          {id: 1, name:"Black bike"},
          {id: 2, name:"Black\nbun"},
          {id: 3, name:"White tobacco"},
          {id: 4, name:"Black\tbomb"},
          {id: 5, name:"Black  bool"}
        ],
        searchedItems: [1, 2, 4, 5],
        request: "black b"
      }
    })
  })
})
