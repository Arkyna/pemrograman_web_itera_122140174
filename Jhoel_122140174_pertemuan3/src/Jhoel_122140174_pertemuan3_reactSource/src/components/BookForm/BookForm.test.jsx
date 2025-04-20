/* global test, expect, vi */

import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "./BookForm";
import { BookContext } from "../../context/BookContext";

test("tidak boleh submit jika judul kosong", () => {
  const mockDispatch = vi.fn();
  const mockFinish = vi.fn();

  render(
    <BookContext.Provider value={{ dispatch: mockDispatch }}>
      <BookForm onFinish={mockFinish} />
    </BookContext.Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
    target: { value: "J.K. Rowling" },
  });

  fireEvent.click(screen.getByRole("button", { name: /tambah/i }));

  expect(screen.getByText(/judul.*wajib/i)).toBeInTheDocument();
  expect(mockFinish).not.toHaveBeenCalled();
  expect(mockDispatch).not.toHaveBeenCalled();
});
