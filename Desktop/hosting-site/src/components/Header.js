import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <h2>Elias Symons</h2>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              className="link"
              to="hero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
