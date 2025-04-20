import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const useBookStats = () => {
  const { books } = useContext(BookContext);
  const total = books.length;
  const owned = books.filter(b => b.status === 'milik').length;
  const reading = books.filter(b => b.status === 'baca').length;
  const wishlist = books.filter(b => b.status === 'beli').length;
  return { total, owned, reading, wishlist };
};
