import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">National Park Finder</h1>

      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/parks" className="link">
              Parks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
