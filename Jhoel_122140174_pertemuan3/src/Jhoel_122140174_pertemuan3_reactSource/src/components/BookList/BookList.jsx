import { useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../context/BookContext";

// Komponen untuk menampilkan daftar buku
// Props:
// - books: array hasil filter/pencarian
// - onEdit: callback saat tombol edit ditekan
const BookList = ({ books, onEdit }) => {
  const { dispatch } = useContext(BookContext);

  // Handler hapus buku
  const handleDelete = (id) => {
    if (confirm("Hapus buku?")) {
      dispatch({ type: "DELETE_BOOK", payload: id });
    }
  };

  // Kalau daftar kosong
  if (books.length === 0) {
    return <p className="empty">Nyari apa.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <div>
            <strong>{book.title}</strong> <em>oleh {book.author}</em>
            <p>Status: {book.status}</p>
          </div>
          <div className="actions">
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Forget</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

// PropTypes
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default BookList;
