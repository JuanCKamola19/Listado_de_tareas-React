import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/" className="menuL">
            Home /
          </Link>
          <Link to="/about" className="menuL">
            About / 
          </Link>
          <Link to="/task" className="menuL">
            Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}