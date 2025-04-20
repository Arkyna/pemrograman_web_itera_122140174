import PropTypes from "prop-types";
import { useState } from "react";

// Komponen BookFilter memungkinkan pengguna memfilter daftar buku berdasarkan status dan kata kunci pencarian.
// Props:
// - onFilter: fungsi yang dikirim dari komponen induk, dipanggil setiap kali filter berubah
//             agar data buku di parent bisa diperbarui sesuai filter (status & keyword)
const BookFilter = ({ onFilter }) => {
  // State untuk menyimpan pilihan status filter
  const [status, setStatus] = useState("all");

  // State untuk menyimpan teks pencarian berdasarkan judul atau penulis buku
  const [keyword, setKeyword] = useState("");

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onFilter({ status: newStatus, keyword });
  };

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    onFilter({ status, keyword: newKeyword });
  };

  return (
    <div className="book-filter">
      <select value={status} onChange={handleStatusChange}>
        <option value="all">No Filter</option>
        <option value="milik">Sudah Punya</option>
        <option value="baca">Lagi Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>

      <input
        type="text"
        placeholder="Insert judul atau penulis."
        value={keyword}
        onChange={handleKeywordChange}
      />

      <button onClick={() => {
        setStatus("all");
        setKeyword("");
        onFilter({ status: "all", keyword: "" });
      }}>
        *poof!*
      </button>
    </div>
  );
};

BookFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default BookFilter;
