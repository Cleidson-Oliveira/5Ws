import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GlobalStyle } from "../../styles/Global";

export default function Contact () {
    return (
        <>
        <Head><title>5Ws | Contato</title></Head>
        <GlobalStyle />
        <Header page="Contact"/>
        <Footer />
        </>
    )
}