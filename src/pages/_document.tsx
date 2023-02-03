import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <form
            name="early-access"
            data-netlify="true"
            netlify-honeypot="name"
            data-netlify-recaptcha="true"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
