import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Startup3 | Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="icon"
          href="https://avatars.dicebear.com/v2/avataaars/{{startup}}.svg?options[mood][]=happy"
        />
        <meta name="theme-color" content="#2F1893" />
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
