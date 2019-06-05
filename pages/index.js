import Link from "next/link";
import "../styles/main.css";

import Button from "../components/Button";
import Container from "../components/Container";

const LandingView = () => {
  return (
    <Container>
      <Button>Log In</Button>

      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </Container>
  );
};

const Index = () => {
  return (
    <div>
      <LandingView path="/" />
    </div>
  );
};

export default Index;
