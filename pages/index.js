import Link from "next/link";

import Auth from "../services/auth.js";
import Button from "../components/Button";

const LandingView = () => {
  return (
    <>
      <Button
        onClick={() => {
          const auth = new Auth();
          auth.login();
        }}
      >
        Log In
      </Button>

      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </>
  );
};

const Index = () => {
  return <LandingView />;
};

export default Index;
