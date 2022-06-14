import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Document
 */
export default class MyDocument extends Document {

    static async getInitialProps(context: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;
    
        try {
          context.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(context)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    

    render(): JSX.Element {
        return (
            <Html lang="pt" id="light">
                <Head>
                    {/* metadata */}
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content="#5ACBBD"/>
                    <meta name="description" content="Hi, I'm David Gaspar"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
                    <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Questrial&family=Reem+Kufi:wght@700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}