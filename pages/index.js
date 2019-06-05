import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../contexts/auth";
import Button from "../components/Button";

const LandingView = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Button
        onClick={() => {
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
