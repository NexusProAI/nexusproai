import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#030712" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <div style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: '#030712', color: '#f1f5f9',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', textAlign: 'center', zIndex: 9999
            }}>
              <div>
                <h1>JavaScript é necessário</h1>
                <p>Por favor, ative o JavaScript em seu navegador para visualizar este site.</p>
              </div>
            </div>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
