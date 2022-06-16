import Head from "next/head";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { GlobalStyle } from "../../../styles/Global";

export default function Questions () {

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Footer />
        </>
    )
}