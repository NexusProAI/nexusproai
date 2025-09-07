import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
            rel="stylesheet" 
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="icon" type="image/png" href="/flavicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          <noscript>
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#1f2937',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              textAlign: 'center',
              zIndex: 9999
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