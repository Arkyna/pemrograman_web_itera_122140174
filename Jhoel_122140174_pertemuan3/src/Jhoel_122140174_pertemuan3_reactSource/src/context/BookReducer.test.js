import { describe, expect, test } from "vitest";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "DELETE_BOOK":
      return state.filter((b) => b.id !== action.payload);
    default:
      return state;
  }
};

describe("bookReducer", () => {
  test("ADD_BOOK adds a book", () => {
    const result = reducer([], {
      type: "ADD_BOOK",
      payload: { id: 1, title: "Test" },
    });
    expect(result).toHaveLength(1);
  });

  test("DELETE_BOOK removes a book", () => {
    const result = reducer([{ id: 1, title: "X" }], {
      type: "DELETE_BOOK",
      payload: 1,
    });
    expect(result).toHaveLength(0);
  });
});
