import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import axios from "axios";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../components/Header";
import { Button } from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";
import Footer from "../../components/Footer";
import Image from "../../components/Utils/ImageWillBeDescribed";
import Wrapper from "./style";
import { Title } from "../../components/Utils/Title/intex";

import { GlobalStyle } from "../../styles/Global";

import 'react-toastify/dist/ReactToastify.min.css';

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
    }, [urls])

    useEffect(() => {
        if (session?.user == null || session?.user == undefined) {
            router.push("/auth/signin");
        }
    }, [session])

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

    const createDescription = async () => {
        const nickName = session?.user?.name as string;

        try {
            if (who == '' && what == '' && when == '' && where == '' && why == '') {
                throw new Error("Escreva algo em algum dos campos!");
            }

            const createdDescription = await axios.post('/api/descriptions/create', {
                roomName,
                nickName,
                url: currentUrl,
                who, 
                what, 
                when, 
                where, 
                why,
                comments: []
            })

            if (!createdDescription.data.success) {
                throw new Error("Algo deu errado!");                
            }        
        
            handleCurrentUrl();
            setWho('');
            setWhat('');
            setWhen('');
            setWhere('');
            setWhy('');

            toast.success("Descrição criada com sucesso!");

        } catch (err) {
            const message = (err as Error).message as string
            toast.error(message)
        }
    }

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Wrapper>
                <div className="roomBy">
                    <Title>{roomName}</Title>
                </div>
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
                    <Button onClick={() => createDescription()}>Enviar</Button>
                </section>
            </Wrapper>
            <Footer />
            <ToastContainer />
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
    
    const urlsResponse = randomImage.data.map((url: Urls) => url.urls.regular);
    const urls = _.shuffle(urlsResponse);

    return {
      props: { urls },
      revalidate: 60 * 60 * 24, // 24 Horas
    }
}