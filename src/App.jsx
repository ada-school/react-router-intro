import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ConfirmationPage } from "./pages/ConfirmationPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MenuPage } from "./pages/MenuPage.jsx";
import { ReservationsPage } from "./pages/ReservationsPage.jsx";

function App() {
  return (
    <Router>
      <div>
        <h1>React Land - Restaurant</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
