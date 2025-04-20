/* global test, expect, vi */

import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import { BookContext } from "../../context/BookContext";

const booksMock = [
  { id: 1, title: "Imagine Dragons", author: "Baluhap Balls", status: "milik" },
];

test("tampilkan judul dan penulis", () => {
  const mockDispatch = vi.fn();

  render(
    <BookContext.Provider value={{ dispatch: mockDispatch }}>
      <BookList books={booksMock} onEdit={() => {}} />
    </BookContext.Provider>
  );

  expect(screen.getByText(/Imagine Dragons/i)).toBeInTheDocument();
  expect(screen.getByText(/Baluhap Balls/i)).toBeInTheDocument();
});
