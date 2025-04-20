import { useReducer } from "react";
import PropTypes from "prop-types";
import { BookContext } from "./BookContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Reducer tetap di sini
const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "UPDATE_BOOK":
      return state.map(book =>
        book.id === action.payload.id ? action.payload : book
      );
    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

// Provider component-nya aja
export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage("books", []);
  const [books, dispatch] = useReducer(bookReducer, storedBooks);

  const syncLocalStorage = (action) => {
    const newState = bookReducer(books, action);
    setStoredBooks(newState);
    dispatch(action);
  };

  return (
    <BookContext.Provider value={{ books: storedBooks, dispatch: syncLocalStorage }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
