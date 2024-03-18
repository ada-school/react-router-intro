import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { BlogPost } from "./components/BlogPost.jsx";
import { BlogList } from "./pages/BlogList.jsx";

function App() {
  return (
    <Router>
      <div>
        <h1>Blog</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact Component={BlogList} />
          <Route path="/posts/:id" Component={BlogPost} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
