import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookProvider";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";

function App() {
  return (
    <BookProvider>
      <Router basename="/pemrograman_web_itera_122140174/Jhoel_122140174_pertemuan3">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/stats">Your Stat</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
