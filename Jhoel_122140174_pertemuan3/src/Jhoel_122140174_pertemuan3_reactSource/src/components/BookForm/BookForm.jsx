import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../context/BookContext";

// Komponen BookForm digunakan untuk menambah atau mengedit buku
// Props:
// - existingBook: data buku yang akan diedit
// - onFinish: callback setelah submit
const BookForm = ({ existingBook = null, onFinish }) => {
  // Gunakan context global untuk dispatch action
  const { dispatch } = useContext(BookContext);

  // State lokal untuk form input
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");

  // Error state untuk validasi input
  const [error, setError] = useState("");

  // Jika form dipakai untuk edit, isi field dengan data existingBook (data yg sudah ada)
  useEffect(() => {
    if (existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setStatus(existingBook.status);
    }
  }, [existingBook]);

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!title.trim() || !author.trim()) {
      setError("Isi semua field, judul dan penulis wajib diisi!");
      return;
    }

    const bookData = {
      id: existingBook?.id || Date.now(),
      title: title.trim(),
      author: author.trim(),
      status,
    };

    // Tentukan apakah ini tambah atau edit/update buku
    dispatch({
      type: existingBook ? "UPDATE_BOOK" : "ADD_BOOK",
      payload: bookData,
    });

    // Reset
    if (onFinish) onFinish();
    setTitle("");
    setAuthor("");
    setStatus("milik");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{existingBook ? "Mode Edit" : "Isi data buku mu"}</h2>

      {/* Error catcher */}
      {error && <p className="error">{error}</p>}

      {/* Judul */}
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Penulis */}
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Status */}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Sudah Punya</option>
        <option value="baca">Lagi Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>

      {/* Tombol Submit */}
      <button type="submit">{existingBook ? "Update" : "Tambah"}</button>
    </form>
  );
};

// PropTypes
BookForm.propTypes = {
  existingBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }),
  onFinish: PropTypes.func,
};

export default BookForm;
