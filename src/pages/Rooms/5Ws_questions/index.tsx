import Head from "next/head";
import { useEffect, useState } from "react";

import axios from "axios";

import Header from "../../../components/Header";
import Button from "../../../components/Utils/Button";
import Input from "../../../components/Utils/Input";
import Footer from "../../../components/Footer";

import { GlobalStyle } from "../../../styles/Global";
import { Wrapper } from "../style";

type Urls = {
    urls: {
        regular: string
    }
}

export default function Questions () {

    //"https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_960_720.jpg"

    const [urls, setUrls] = useState([])
    const [currentUrl, setCurrentUrl] = useState('');
    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [why, setWhy] = useState('');
    const [roomName, setRoomName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        searchImage();

        const info = localStorage.getItem('fiveWs');
        const infoJson = JSON.parse(info!)
        
        setRoomName(infoJson.roomName!);
        setNickName(infoJson.nickName!);
    }, [])

    useEffect(() => {
        setCurrentUrl(urls[0])
    },[urls])
    
    const searchImage = async () => {
        const url = process.env.UNSPLASH_URL!
        const randomImage = await axios.get(
            'https://api.unsplash.com/collections/IQmOGHF8H9U/photos/?per_page=30&client_id=QK0DOMNjfpYq4eBygRr6Iz1Lpt0RhsNdj4zEmS7b7eA'
        );
        setUrls(() => {
            const urls = randomImage.data.map((url: Urls) => url.urls.regular)
            return urls;
        })
    }

    const enviar = async () => {
        // const t = await axios.post('api/create_description', {
        //     roomName,
        //     nickName,
        //     url: currentUrl,
        //     who, 
        //     what, 
        //     when, 
        //     where, 
        //     why
        // })

        console.log({
            roomName,
            nickName,
            url: currentUrl,
            who, 
            what, 
            when, 
            where, 
            why
        })
       
        setWho('');
        setWhat('');
        setWhen('');
        setWhere('');
        setWhy('');
    }

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Wrapper>
                <section>
                    <img src={currentUrl} />
                </section>
                <section>
                    <Input
                        value={[who, setWho]}
                        name="Who"
                        placeholder="Quem está na foto?"
                    />
                    <Input
                        value={[what, setWhat]}
                        name="What"
                        placeholder="O que está acontecendo?"
                    />
                    <Input
                        value={[when, setWhen]}
                        name="When"
                        placeholder="Em que momento está acontecendo?"
                    />
                    <Input
                        value={[where, setWhere]}
                        name="Where"
                        placeholder="Descreva o local da imagem!"
                    />
                    <Input
                        value={[why, setWhy]}
                        name="Why"
                        placeholder="Por que?"
                    />
                    <Button onClick={() => enviar()}>Enviar</Button>
                </section>
            </Wrapper>
            <Footer />
        </>
    )
}