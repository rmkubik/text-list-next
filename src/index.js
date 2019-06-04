import ReactDOM from "react-dom";
import React from "react";
import { Router, Link } from "@reach/router";

const LandingView = () => {
  return (
    <div>
      <button>Log In</button>
      <Link to="/register">Register</Link>
    </div>
  );
};

const RegistrationView = () => {
  return (
    <form>
      <label>User Name</label>
      <input />
      <label>Password</label>
      <input />
      <label>Confirm Password</label>
      <input />
      <input type="submit" />
    </form>
  );
};

const App = () => {
  return (
    <Router>
      <LandingView path="/" />
      <RegistrationView path="/register" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
