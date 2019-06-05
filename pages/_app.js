import App, { Container } from "next/app";

import Auth from "../services/auth.js";
import Layout from "../components/Layout";

class TextListApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default TextListApp;
