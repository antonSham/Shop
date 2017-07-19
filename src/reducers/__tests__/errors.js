import errors from "../errors.js";
import { THROW_ERROR, POP_ERROR } from "../../actions/index.js";

describe("Adding error", () => {
  it("Add to empty error list", () => {
    expect(
      errors([], {
        type: THROW_ERROR,
        errorMessage: "1 error"
      })
    ).toEqual([
      {
        errorMessage: "1 error"
      }
    ]);
  });

  it("Add to not empty error list", () => {
    expect(
      errors(
        [
          {
            errorMessage: "1 error"
          }
        ],
        {
          type: THROW_ERROR,
          errorMessage: "2 error"
        }
      )
    ).toEqual([
      {
        errorMessage: "1 error"
      },
      {
        errorMessage: "2 error"
      }
    ]);
  });
});

describe("Popping error", () => {
  it("Pop value", () => {
    expect(
      errors(
        [
          {
            errorMessage: "1 error"
          },
          {
            errorMessage: "2 error"
          },
          {
            errorMessage: "3 error"
          }
        ],
        {
          type: POP_ERROR,
          id: 1
        }
      )
    ).toEqual([
      {
        errorMessage: "1 error"
      },
      {
        errorMessage: "3 error"
      }
    ]);
  });

  it("Pop wrong value", () => {
    expect(
      errors(
        [
          {
            errorMessage: "1 error"
          },
          {
            errorMessage: "2 error"
          },
          {
            errorMessage: "3 error"
          }
        ],
        {
          type: POP_ERROR,
          id: 4
        }
      )
    ).toEqual([
      {
        errorMessage: "1 error"
      },
      {
        errorMessage: "2 error"
      },
      {
        errorMessage: "3 error"
      }
    ]);
  });

  it("Pop first value", () => {
    expect(
      errors(
        [
          {
            errorMessage: "1 error"
          },
          {
            errorMessage: "2 error"
          },
          {
            errorMessage: "3 error"
          }
        ],
        {
          type: POP_ERROR,
          id: 0
        }
      )
    ).toEqual([
      {
        errorMessage: "2 error"
      },
      {
        errorMessage: "3 error"
      }
    ]);
  });

  it("Pop last value", () => {
    expect(
      errors(
        [
          {
            errorMessage: "1 error"
          },
          {
            errorMessage: "2 error"
          },
          {
            errorMessage: "3 error"
          }
        ],
        {
          type: POP_ERROR,
          id: 2
        }
      )
    ).toEqual([
      {
        errorMessage: "1 error"
      },
      {
        errorMessage: "2 error"
      }
    ]);
  });
});
