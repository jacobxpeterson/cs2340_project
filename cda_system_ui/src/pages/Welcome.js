import "../App.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div class="App">
      <h1 class="title">Welcome</h1>
      <Link to="/about">
        <button className="button is-success is-medium">Sign Up</button>
      </Link>
      <Link to="/login">
        <button className="button is-info is-medium">Log In</button>
      </Link>
      
    </div>
  );
}

export default Welcome;
