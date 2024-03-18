import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RidesPage } from "./pages/RidesPage";
import { TicketsPage } from "./pages/TicketsPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

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
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rides" element={<RidesPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
