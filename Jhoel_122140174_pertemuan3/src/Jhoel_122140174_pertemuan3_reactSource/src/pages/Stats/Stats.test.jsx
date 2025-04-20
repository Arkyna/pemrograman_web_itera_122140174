/* global test, expect */
import { render, screen } from "@testing-library/react";
import Stats from "./Stats";
import { BookContext } from "../../context/BookContext";

const books = [
  { id: 1, title: "1", author: "api", status: "milik" },
  { id: 2, title: "2", author: "air", status: "baca" },
  { id: 3, title: "3", author: "tanah", status: "beli" },
];

test("tampilkan statistik jumlah buku", () => {
  render(
    <BookContext.Provider value={{ books }}>
      <Stats />
    </BookContext.Provider>
  );

  expect(screen.getByText(/total buku: 3/i)).toBeInTheDocument();
});
