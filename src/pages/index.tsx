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
      </Head>

      <Header />

      <ApplicationDescription />

      <Main />

      <Footer />
    </>
  )
}

export default Home
