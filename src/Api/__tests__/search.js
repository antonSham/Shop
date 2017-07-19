import search from "../search.js";

const testSearch = (name, data, request, answer) => {
  it(name, () => {
    expect(
      search(
        data.map(
          el => ({
            id: data.indexOf(el) + 1,
            name: el
          })
        ),
        request
      )
    ).toEqual(
      answer
    );
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
