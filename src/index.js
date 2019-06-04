import ReactDOM from "react-dom";
import React from "react";

const LandingView = () => {
  return (
    <div>
      <button>Log In</button>
      <button>Register</button>
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
  return <RegistrationView />;
};

ReactDOM.render(<App />, document.getElementById("root"));
