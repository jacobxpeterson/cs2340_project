import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>GT Campus Discovery Service</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/eventList">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/map">
          <li>Map</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
