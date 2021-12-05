import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

/**
 * Document
 */
export default class MyDocument extends Document {

    static async getInitialProps(context: DocumentContext) {
        const initialProps = await super.getInitialProps(context);


        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="pt" id="light">
                <Head>
                    {/* metadata */}
                    <meta charSet="utf-8"/>
                    <meta
                        name="description"
                        content="Diagnose é uma inteligia artificial que ajudarar você a escolher o melhor produto para seu objetivo."/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}