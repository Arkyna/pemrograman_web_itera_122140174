import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookProvider";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";

// Dynamic basename: root (dev) or GH Pages path (build)
const basename =
  import.meta.env.MODE === 'production'
    ? '/pemrograman_web_itera_122140174/Jhoel_122140174_pertemuan3'
    : '/';

function App() {
  return (
    <BookProvider>
      <Router basename={basename}>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="https://arkyna.github.io/pemrograman_web_itera_122140174/">Hub Tugas</Link>
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
