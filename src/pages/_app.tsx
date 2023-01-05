import "../../styles/globals.css";
import "../../styles/prism.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>David Gaspar</title>

				<meta property="og:url" content="https://davidgaspar.dev" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="David Gaspar Dev" />
				<meta
					property="og:description"
					content="My website for you to know more about me"
				/>
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/my-website%2Fthumb.png?alt=media&token=b3414b3a-7d44-4d36-984c-f5079e17f5a6"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
