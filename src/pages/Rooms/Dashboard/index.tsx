import Head from "next/head";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { GlobalStyle } from "../../../styles/Global";
import { useEffect, useState } from "react";

export default function Questions () {

    const [roomName, setRoomName] = useState('')

    useEffect(() => {
        const info = localStorage.getItem('fiveWs');
        const infoJson = JSON.parse(info!)
        
        setRoomName(infoJson.roomName!);
    }, [])

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Footer />
        </>
    )
}