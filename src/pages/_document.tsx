import Document, { Head, Html, Main, NextScript } from "next/Document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/react-slidy/lib/styles.css" />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
