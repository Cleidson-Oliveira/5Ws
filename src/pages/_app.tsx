import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />  
        <meta name="author" content="Cleidson Oliveira" />
        <meta name="description" content="Aplicação que visa ajudar o processo de criação de frases em outra língua" />
        <meta name="keywords" content="learn english, learn languages" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default MyApp;