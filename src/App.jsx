import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RidesPage } from "./pages/RidesPage";
import { RideDetailPage } from "./pages/RideDetailPage";

function App() {
  return (
    <Router>
      <main>
        <h1>React Land - Theme Park</h1>
      </main>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rides">Rides</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rides" element={<RidesPage />} />
        <Route path="/rides/:id" element={<RideDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
