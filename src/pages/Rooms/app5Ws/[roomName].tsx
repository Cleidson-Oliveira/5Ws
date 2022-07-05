import Head from "next/head";
import { useEffect, useState } from "react";

import axios from "axios";

import Header from "../../../components/Header";
import Buttons from "../../../components/Utils/Button";
import Input from "../../../components/Utils/Input";
import Footer from "../../../components/Footer";

import { GlobalStyle } from "../../../styles/Global";
import Wrapper from "./style";
import Image from "../../../components/Utils/ImageWillBeDescribed";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Title } from "../../../components/Utils/Title/intex";

interface QuestionsProps {
    urls: string[]
}

type Urls = {
    urls: {
        regular: string
    }
}

export default function Questions ({ urls }: QuestionsProps) {

    const router = useRouter();
    const { roomName } = router.query;
    const {data: session} = useSession();

    const [currentUrl, setCurrentUrl] = useState('');
    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [why, setWhy] = useState('');

    useEffect(() => {
        setCurrentUrl(urls[0])
    },[urls])

    const handleCurrentUrl = () => {
        setCurrentUrl(prevState => {
            let itemTarget = prevState;
            urls.forEach((v, i) => {                
                if (v == prevState) {
                    itemTarget = urls[i + 1];
                }
            })
            return itemTarget;
        })
    }

    const enviar = async () => {
        const nickName = session?.user?.name as string

        const t = await axios.post('/api/descriptions/create', {
            roomName,
            nickName,
            url: currentUrl,
            who, 
            what, 
            when, 
            where, 
            why
        })
       
        handleCurrentUrl();
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
                <Title>{roomName}</Title>
            </Wrapper>
            <Wrapper>
                <section>
                    <Image src={currentUrl} onChangeCurrentUrl={handleCurrentUrl}/>
                </section>
                <section>
                    <Input
                        autofocus
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
                    <Buttons.Button onClick={() => enviar()}>Enviar</Buttons.Button>
                </section>
            </Wrapper>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: "blocking"
    };
}

export async function getStaticProps() {
    const randomImage = await axios.get(
        `https://api.unsplash.com/collections/IQmOGHF8H9U/photos/?per_page=30&client_id=${process.env.UNSPLASH_KEY!}`
    );
    
    const urls = randomImage.data.map((url: Urls) => url.urls.regular);

    return {
      props: { urls },
      revalidate: 60 * 60 * 24, // 24 Horas
    }
}