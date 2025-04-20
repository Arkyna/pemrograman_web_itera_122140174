/* global test, expect, vi */ //annoying asf 
import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "./BookFilter";

test("memicu onFilter saat input berubah", () => {
  const mock = vi.fn();
  render(<BookFilter onFilter={mock} />);

  fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
    target: { value: "harry" },
  });

  expect(mock).toHaveBeenCalledWith({ status: "all", keyword: "harry" });
});
