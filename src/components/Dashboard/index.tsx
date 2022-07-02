import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import axios from "axios";

import { Wrapper, AsideContent, MainContent } from "./style";
import { SubTitle, Title } from "../Utils/Title/intex";
import Input from "../Utils/Input";
import Buttons from "../Utils/Button";
import { Modal } from "../Modal";

const { Button } = Buttons;

interface RoomsListType {
    data: {
        userName: string,
        roomName: string
    }
}

interface DescriptionsListType {
    data: {
        roomName: string,
        nickName: string,
        url: string,
        who: string,
        what: string,
        when: string,
        where: string,
        why: string,
    }
}

export default function Dashboard () {

    const router = useRouter();
    const {data: session} = useSession();

    const [roomsList, setRoomsList] = useState<RoomsListType[]>([]);
    const [descriptionsList, setDescriptionsList] = useState<DescriptionsListType[]>([]);
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

    const getUserDescriptions = async () => {
        const desc = await axios.post('api/descriptions/read', {
            userName: session?.user?.name,
        });
        setDescriptionsList(desc.data.data)
    }
    
    const enterInRoom = async () => {
        const rooms = await axios.post('api/rooms/verifyIfExistRoom', {
            roomName
        })
        if (rooms.data.roomExistes) {
            router.push(`/Rooms/app5Ws/${roomName}`);
        }
    }

    const handlerShowNewRoom = () => {
        setShowNewRoom(!showNewRoom)
    }
    
    const handlerShowEnterInRoom = () => {
        setShowEnterInRoom(!showEnterInRoom)
    }

    useEffect(() => {
        getUserRooms();
        getUserDescriptions();
    }, [])

    return (
        <Wrapper>
            <AsideContent>
                <Title>Dashboard</Title>
                <Button 
                    onClick={() => {
                        handlerShowNewRoom()
                    }}
                >
                    Criar nova sala
                </Button>

                <Button 
                    onClick={() => {
                        handlerShowEnterInRoom()
                    }}
                >
                    Entar em uma sala
                </Button>
            </AsideContent>

            <MainContent>
                {showNewRoom && (
                    <Modal
                        functions={handlerShowNewRoom}
                    >
                        <section>
                            <Title>Crie uma sala</Title>
                            <Input
                                name="Nome da sala"
                                placeholder="Digite o nome da sala"
                                value={[newRoomName, setNewRoomName]}
                            />
                            <Button onClick={() => {
                                createNewRoom()
                                handlerShowNewRoom()
                            }}>Criar</Button>
                        </section>
                    </Modal>
                )}

                {showEnterInRoom && (
                    <Modal
                        functions={handlerShowEnterInRoom}
                    >
                        <section>
                            <Title>Entre em uma sala</Title>
                            <Input
                                name="Nome da sala"
                                placeholder="Digite o nome da sala"
                                value={[roomName, setRoomName]}
                            />
                            <Button onClick={() => {
                                enterInRoom();
                                handlerShowEnterInRoom();
                            }}>Entrar</Button>
                        </section>
                    </Modal>
                )}

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
                    {descriptionsList.length > 0
                        ? descriptionsList.map((desc, i) => (
                            <p key={i}>{desc.data.roomName}</p>
                        ))
                        : (
                            <div>
                                <p>
                                    Nenhuma descrição encontrada
                                </p>
                                <Button onClick={() => setShowEnterInRoom(!showEnterInRoom)}>
                                    Entre em uma sala
                                </Button>
                            </div>
                        )
                    }
                </section>
            </MainContent>

        </Wrapper>
    )
}