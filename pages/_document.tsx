import React from 'react';
import NextDocument, { Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as snippet from '@segment/snippet';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  renderSnippet() {
    const { SEGMENT_ID, NODE_ENV } = process.env;
    console.log('>>>>>>>', 'renderSnippet called');
    console.log('>>>>>>>', NODE_ENV);
    console.log('>>>>>>>', SEGMENT_ID);
    if (NODE_ENV === 'production') {
      console.log('>>>>>>>', 'renderSnippet called in condition');
      const opts = {
        apiKey: SEGMENT_ID,
        page: true,
      };

      return snippet.min(opts);
    }
  }

  render() {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
