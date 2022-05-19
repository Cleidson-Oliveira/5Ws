import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../components/Footer';

import Header from '../components/Header';
import Main from '../components/Application';
import { GlobalStyle } from '../styles/Global';
import AppDescription from '../components/AppDescription';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>5Ws | Home</title>
      </Head>
      <Header page="Home"/>
      <AppDescription />
      <Main />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default Home
