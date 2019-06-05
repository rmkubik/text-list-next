import Link from "next/link";

import Button from "../components/Button";
import Layout from "../components/Layout";

const LandingView = () => {
  return (
    <Layout>
      <Button>Log In</Button>

      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </Layout>
  );
};

const Index = () => {
  return <LandingView />;
};

export default Index;
