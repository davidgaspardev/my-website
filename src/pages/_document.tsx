import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Document
 */
export default class MyDocument extends Document {
	public render(): JSX.Element {
		return (
			<Html lang="pt" id="light">
				<Head>
					<title>David Gaspar</title>

					{/* metadata */}
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#5ACBBD" />
					<meta name="description" content="Hi, I'm David Gaspar" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Questrial&family=Reem+Kufi:wght@700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
