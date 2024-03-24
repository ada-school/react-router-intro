import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

function App() {
  return (
    <Router>
      <h1>Project Management</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
