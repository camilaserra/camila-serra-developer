import Document, { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/Partials/Analytics'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="shortcut icon"
            href="/img/favicon-32x32.png"
            type="image/x-icon"
          />
          <meta name="theme-color" content="#fff" />
          <link
            href="https://fonts.googleapis.com/css2?family=Glory:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument
