import App, { Container } from "next/app";

import AuthContext from "../contexts/auth";
import Auth from "../services/auth";

const auth = new Auth();

import Layout from "../components/Layout";

class TextListApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AuthContext.Provider value={auth}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContext.Provider>
      </Container>
    );
  }
}

export default TextListApp;
