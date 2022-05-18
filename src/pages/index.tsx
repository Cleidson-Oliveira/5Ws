import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Main from '../components/Application';
import { GlobalStyle } from '../styles/Global';
import ApplicationDescription from '../components/ApplicationDescription';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>5Ws | Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href={"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"}
          rel="stylesheet"
        />
      </Head>

      <Header />

      <ApplicationDescription />

      <Main />

      <Footer />
    </>
  )
}

export default Home
