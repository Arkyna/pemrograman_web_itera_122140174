import { useState } from "react";
import { useMemo } from "react"; // ← make sure useMemo is imported
import BookForm from "../../components/BookForm/BookForm";
import BookList from "../../components/BookList/BookList";
import BookFilter from "../../components/BookFilter/BookFilter";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

// Halaman Home: tempat semua fitur utama berkumpul
const Home = () => {
    const { books } = useContext(BookContext); // Ambil data global
    const [filter, setFilter] = useState({ status: "all", keyword: "" });
    const [editTarget, setEditTarget] = useState(null); // Buku yang sedang diedit

    const handleFilter = ({ status, keyword }) => {
        setFilter({ status, keyword });
    };
    // Terapkan filter berdasarkan keyword & status
    const filteredBooks = useMemo(() => {
        let result = books;

        if (filter.status !== "all") {
            result = result.filter((b) => b.status === filter.status);
        }

        if (filter.keyword.trim()) {
            const kw = filter.keyword.toLowerCase();
            result = result.filter(
                (b) =>
                    b.title.toLowerCase().includes(kw) ||
                    b.author.toLowerCase().includes(kw)
            );
        }

        return result;
    }, [books, filter]);


    // Refresh list dan reset edit setelah submit form
    const handleFormFinish = () => {
        setEditTarget(null);
    };


    return (
        <div className="home-page">
            <h1>List Koleksi Buku Saya</h1>

            {/* Form untuk tambah/edit */}
            <BookForm existingBook={editTarget} onFinish={handleFormFinish} />

            {/* Filter dan search */}
            <BookFilter onFilter={handleFilter} />

            {/* Daftar buku */}
            <BookList books={filteredBooks} onEdit={setEditTarget} />
        </div>
    );
};

export default Home;
