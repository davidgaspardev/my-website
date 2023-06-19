import "@/styles/globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "David Gaspar",
  description: "My website for you to know more about me",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
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

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="davidgaspar.dev" />
        <meta property="twitter:url" content="https://davidgaspar.dev" />
        <meta name="twitter:title" content="David Gaspar Dev" />
        <meta
          name="twitter:description"
          content="My website for you to know more about me"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/my-website%2Fthumb.png?alt=media&token=b3414b3a-7d44-4d36-984c-f5079e17f5a6"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
