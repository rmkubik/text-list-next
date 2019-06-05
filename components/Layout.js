import "../styles/main.css";

import Container from "./Container";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Main>
  );
};

export default Layout;
