import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href={"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"}
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}