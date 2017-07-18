import items from "../reducers/items.js";
import { SEARCH } from "../actions/index.js";

const testSearch = (name, data, request, answer) => {
  it(name, () => {
    expect(
      items(
        {
          data: data.map(el => ({
            id: data.indexOf(el) + 1,
            name: el
          })),
          loading: true,
          error: "",
          search: {
            request: "",
            answer: []
          }
        },
        {
          type: SEARCH,
          request: request
        }
      )
    ).toEqual({
      data: data.map(el => ({
        id: data.indexOf(el) + 1,
        name: el
      })),
      loading: true,
      error: "",
      search: {
        request: request,
        answer: answer
      }
    });
  });
};

describe("Search", () => {
  testSearch("Get from empty data", [], "alib", []);
  testSearch("One letter", ["Bike", "Gun", "Tobacco", "Bomb"], "b", [1, 3, 4]);
  testSearch("Two letters", ["Bio", "Gun", "Tobo", "Bomb"], "bO", [3, 4]);
  testSearch(
    "Word spacing",
    ["Black bike", "Black\nbun", "White tobacco", "Black\tbomb", "Black  bool"],
    "black b",
    [1, 2, 4, 5]
  );
});
