import "../../styles/globals.css";
import "../../styles/prism.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>David Gaspar</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
