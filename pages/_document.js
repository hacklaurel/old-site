import Document, { Head, Main, NextScript, Html } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`:root { supported-color-schemes: light dark; }`}</style>
          <meta name="format-detection" content="telephone=no" />
          <script async src="https://hacklaurel-analytics.up.railway.app/tracker.js" data-ackee-server="https://hacklaurel-analytics.up.railway.app" data-ackee-domain-id="7caaf1ec-81b8-451c-af13-17f999f3a1f4"></script>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
