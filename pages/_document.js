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
          <script async defer data-website-id="cf608ab0-bfce-472f-97db-d77b96ef8750" src="https://magic.thrzl.xyz/umami.js"></script>
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
