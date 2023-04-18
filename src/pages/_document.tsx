import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {



  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="../../static/favicon.png" />
          <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
          <meta name="google" content="notranslate" key="notranslate" />
          <meta name="description" content="The best place in the galaxy for gaming livestreamers and youtubers"/>
          <meta property="og:title" content="The best place in the galaxy for gaming livestreamers and youtubers" />
          <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css" />
        </Head>
        <body className="antialiased">

          <Main />
          <NextScript />

          <script async src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
