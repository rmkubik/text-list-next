import "../styles/main.css";

const LandingView = () => {
  return (
    <div>
      <button>Log In</button>
      <button to="/register">Register</button>
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

const Index = () => {
  return (
    <div>
      <LandingView path="/" />
      <RegistrationView path="/register" />
    </div>
  );
};

export default Index;
