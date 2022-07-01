import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import axios from "axios";

import { Wrapper, AsideContent, MainContent } from "./style";
import { SubTitle, Title } from "../Utils/Title/intex";
import Input from "../Utils/Input";
import Buttons from "../Utils/Button";

const { Button } = Buttons;

interface RoomsListType {
    data: {
        userName: string,
        roomName: string
    }
}

export default function Dashboard () {

    const router = useRouter();
    const {data: session} = useSession();

    const [roomsList, setRoomsList] = useState<RoomsListType[]>([]);
    const [newRoomName, setNewRoomName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showNewRoom, setShowNewRoom] = useState(false);
    const [showEnterInRoom, setShowEnterInRoom] = useState(false);

    const createNewRoom = async () => {
        try {
            if (newRoomName == '') {
                throw new Error ("Digite um nome para a sala");
            }

            const userName = session?.user?.name as string;
            const createdData = await axios.post('api/rooms/create', {
                userName,
                roomName: newRoomName,
            })

            const { data } = createdData;

            if (data.created == false) {
                throw new Error ("Nome da sala já existe");
            }
            
            setRoomsList(prevState => ([...prevState, 
                {data: {
                    userName,
                    roomName: newRoomName,
                }}
            ]))
        } catch (err) {
            alert(err)
        }
    }
    
    const getUserRooms = async () => {
        const rooms = await axios.post('api/rooms/readAll', {
            userName: session?.user?.name,
        });
        setRoomsList(rooms.data.data)
    }
    
    const enterInRoom = async () => {
        const rooms = await axios.post('api/rooms/verifyIfExistRoom', {
            roomName
        })
        if (rooms.data.roomExistes) {
            router.push(`/Rooms/app5Ws/${roomName}`);
        }
    }

    useEffect(() => {
        getUserRooms();     
    }, [])

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
                    <Button onClick={() => enterInRoom()}>Entrar</Button>
                </section>)}

                <section>
                    <SubTitle>Veja aqui suas salas</SubTitle>
                    {roomsList.length > 0
                        ? roomsList.map((room, i) => (
                            <p key={i}>{room.data.roomName}</p>
                        ))
                        : (
                            <div>
                                <p>
                                    Nenhuma sala encontrada
                                </p>
                                <Button onClick={() => setShowNewRoom(!showNewRoom)}>
                                    Criar nova sala
                                </Button>
                            </div>
                        )
                    }
                </section> 

                <section>
                    <SubTitle>Veja aqui suas descrições</SubTitle>
                </section>
            </MainContent>

        </Wrapper>
    )
}