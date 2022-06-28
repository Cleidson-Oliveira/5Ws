import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import axios from "axios";

import { Wrapper, AsideContent, MainContent } from "./style";
import { VerticalSeparator } from "../Utils/Separator/insdex";
import { SubTitle, Title } from "../Utils/Title/intex";
import Input from "../Utils/Input";
import Buttons from "../Utils/Button";

const { Button } = Buttons;

export default function Dashboard () {

    const router = useRouter();
    const {data: session} = useSession();

    const [newRoomName, setNewRoomName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [nickName, setNickName] = useState('');
    const [showNewRoom, setShowNewRoom] = useState(false);
    const [showEnterInRoom, setShowEnterInRoom] = useState(false);

    const createNewRoom = async () => {
        const t = await axios.post('api/create_room', {
            name: session?.user?.name,
            newRoomName,
        })
    }
    
    const enterInRoom = () => {
        router.push("/Rooms/5Ws_questions");
    }

    return (
        <Wrapper>
            <AsideContent>
                <Title>Dashboard</Title>
                <Button 
                    onClick={() => {
                        setShowNewRoom(!showNewRoom)
                    }}
                >
                    Criar nova sala
                </Button>

                <Button 
                    onClick={() => {
                        setShowEnterInRoom(!showEnterInRoom)
                    }}
                >
                    Entar em uma sala
                </Button>
            </AsideContent>

            <MainContent>
                {showNewRoom && (<section>
                    <Title>Crie uma sala</Title>
                    <Input
                        name="Nome da sala"
                        placeholder="Digite o nome da sala"
                        value={[newRoomName, setNewRoomName]}
                    />
                    <Button onClick={() => createNewRoom()}>Criar</Button>
                </section>)}

                {showEnterInRoom && (<section>
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
                    <Button onClick={() => enterInRoom()}>Entrar</Button>
                </section>)}

                <section>
                    <SubTitle>Veja aqui suas salas criadas</SubTitle>
                </section>

                <section>
                    <SubTitle>Veja aqui suas descrições</SubTitle>
                </section>
            </MainContent>

        </Wrapper>
    )
}