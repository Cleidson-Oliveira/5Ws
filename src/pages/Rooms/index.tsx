import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";

import Header from "../../components/Header";
import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../styles/Global";
import { Wrapper } from "./style";

export default function Rooms () {

    const router = useRouter()

    const [roomName, setRoomName] = useState('');
    const [nickName, setNickName] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const createNewRoom = async () => {
        const t = await axios.post('api/create_room', {
            roomName,
            roomCode
        })
        localStorage.setItem('fiveWs', JSON.stringify({roomName}))
        router.push("/Rooms/Dashboard");
    }
    const enterInRoom = () => {
        localStorage.setItem('fiveWs', JSON.stringify({roomName, nickName}));
        router.push("/Rooms/5Ws_questions");
    }

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Wrapper>
                <section>
                    <Input
                        name="Nome da sala"
                        placeholder="Digite o nome da sala"
                        value={[roomName, setRoomName]}
                    />
                    <Input
                        name="Código"
                        placeholder="Digite o código secreto para criar a sala"
                        value={[roomCode, setRoomCode]}
                    />
                    <Button onClick={() => createNewRoom()}>Criar</Button>
                </section>
                <section>
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
                    <Button onClick={() => enterInRoom()}>Entrar</Button>
                </section>
            </Wrapper> 
            <Footer />
        </>
    )
}