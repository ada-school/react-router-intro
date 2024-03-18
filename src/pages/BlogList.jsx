import { Link } from "react-router-dom";

export function BlogList() {
  return (
    <main>
      <h1>Welcome to our blog</h1>
      <p>Read all about it!</p>
      <ul>
        <li>
          <Link to="/posts/react-components">
            React components are the best!
          </Link>
        </li>
        <li>
          <Link to="/posts/state-management-with-hooks">
            State management with hooks
          </Link>
        </li>
        <li>
          <Link to="/posts/make-your-own-hooks">
            How to make your own hooks
          </Link>
        </li>
      </ul>
    </main>
  );
}
