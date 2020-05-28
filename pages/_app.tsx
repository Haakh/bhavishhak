import "styles/global-styles.scss";
import App, { Container } from "next/app";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          key="google-font-montserrat"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </Container>
  );
}
