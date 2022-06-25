import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession} from "next-auth/react";

import axios from "axios";

import Header from "../../components/Header";
import Buttons from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";
import Loading from "../../components/Utils/Loading";
import Footer from "../../components/Footer";
import { VerticalSeparator } from "../../components/Utils/Separator/insdex";
import { Title } from "../../components/Utils/Title/intex";

import { GlobalStyle } from "../../styles/Global";
import { Wrapper } from "./style";


export default function Rooms () {

    const router = useRouter();
    const { data: session } = useSession();
    console.log(session);

    const [createRoomName, setCreateRoomName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [roomName, setRoomName] = useState('');
    const [nickName, setNickName] = useState('');

    const createNewRoom = async () => {
        const t = await axios.post('api/create_room', {
            createRoomName,
            roomCode
        })
        // sessionStorage.setItem('fiveWs', JSON.stringify({roomName}))
        router.push("/Rooms/Dashboard");
    }
    const enterInRoom = () => {
        // sessionStorage.setItem('fiveWs', JSON.stringify({roomName, nickName}));
        router.push("/Rooms/5Ws_questions");
    }

    useEffect(() => {
        if (session?.user == null || session?.user == undefined) {
            router.push("/auth/signin");
        }
    }, [session])

    if(session) {
        return (
            <>
                <Head><title>5Ws | Dashboard</title></Head>
                <GlobalStyle />
                <Header page="Rooms"/>
                <Wrapper>
                    <section>
                        <Title>Crie uma sala</Title>
                        <Input
                            name="Nome da sala"
                            placeholder="Digite o nome da sala"
                            value={[createRoomName, setCreateRoomName]}
                        />
                        <Input
                            name="Código"
                            placeholder="Digite o código secreto para criar a sala"
                            value={[roomCode, setRoomCode]}
                        />
                        <Buttons.Button onClick={() => createNewRoom()}>Criar</Buttons.Button>
                    </section>
                    <VerticalSeparator />
                    <section>
                        <Title>Entre em uma sala</Title>
                        <Input
                            name="Nome da sala"
                            placeholder="Digite o nome da sala"
                            value={[roomName, setRoomName]}
                        />
                        <Input
                            name="Nickname"
                            placeholder="Digite o seu nome ou apelido"
                            value={[nickName, setNickName]}
                        />
                        <Buttons.Button onClick={() => enterInRoom()}>Entrar</Buttons.Button>
                    </section>
                </Wrapper> 
                <Footer />
            </>
        )
    }

    return (
        <>
            <Head><title>5Ws | Dashboard</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Loading />
            <Footer />
        </>
    )
}