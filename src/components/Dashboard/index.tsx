import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import axios from "axios";

import { Wrapper, AsideContent, MainContent, ItemListRoom, CardDescription } from "./style";
import { SubTitle, Title } from "../Utils/Title/intex";
import Input from "../Utils/Input";
import Buttons from "../Utils/Button";
import { Modal } from "../Modal";
import { AiOutlineDelete } from "react-icons/ai";

const { Button, RoundedButton } = Buttons;

interface RoomsListType {
    data: {
        userName: string,
        roomName: string
    },
    ref: {
        "@ref": {
            id: string
        }
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
        comments: [string],
    },
    ref: {
        "@ref": {
            id: string
        }
    }
}

export default function Dashboard () {

    const router = useRouter();
    const {data: session} = useSession();

    const [roomsList, setRoomsList] = useState<RoomsListType[]>([]);
    const [descriptionsOnRoom, setDescriptionsOnRoom] = useState<DescriptionsListType[]>([]);
    const [descriptionsList, setDescriptionsList] = useState<DescriptionsListType[]>([]);
    const [newRoomName, setNewRoomName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showNewRoom, setShowNewRoom] = useState(false);
    const [showEnterInRoom, setShowEnterInRoom] = useState(false);
    const [dashboardShowOptions, setDashboardShowOptions] = useState<"rooms" | "descriptions">("rooms");

    const createNewRoom = async () => {
        try {
            if (newRoomName == '') {
                throw new Error ("Digite um nome para a sala");
            }

            const userName = session?.user?.name as string;
            const createdData = await axios.post('api/rooms/create', {
                createdBy: userName,
                roomName: newRoomName,
            })

            if (createdData.data.created == false) {
                throw new Error ("Nome da sala já existe");
            }
            
            setRoomsList(prevState => ([...prevState, 
                {
                    data: createdData.data.data,
                    ref: createdData.data.ref
                }
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

    const deleteRoom = async (ref: string) => {
        try {
            const rooms = await axios.post('api/rooms/delete', {
                ref,
            });
            
            setRoomsList(prevState => (
                prevState.filter(roomWillBeDeleted => {
                    return roomWillBeDeleted.ref["@ref"].id != ref
                })
            ))
        } catch (err){
            console.log(err)
        }
    }
    
    const deleteDescription = async (ref: string) => {
        try {
            const description = await axios.post('api/descriptions/delete', {
                ref,
            });
            
            setDescriptionsList(prevState => (
                prevState.filter(roomWillBeDeleted => {
                    return roomWillBeDeleted.ref["@ref"].id != ref
                })
            ))
        } catch (err){
            console.log(err)
        }
    }

    const getUserDescriptions = async () => {
        const desc = await axios.post('api/descriptions/readByNickName', {
            userName: session?.user?.name,
        });
        setDescriptionsList(desc.data.data)
    }
    
    const getDescriptionsOnRoom = async (roomName: string) => {
        const desc = await axios.post('api/descriptions/readByRoomName', {
            roomName
        });
        setDescriptionsOnRoom(desc.data.data)
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

    const handlerDescriptionsOnRoomList = () =>{
        setDescriptionsOnRoom([])
    }

    const addNewCommentOnDescription = async (ref: string, prevComments: [string]) => {
        try {
            const comment = prompt("Adicione um comentário!") as string;
            const comments = prevComments;
            if (comment == '') {
                throw new Error("Digite um comentário!")
            }
            comments.push(comment);
            
            const rooms = await axios.post('api/descriptions/addComments', {
                ref,
                comments
            });

        } catch (err) {
            alert(err)
        }
    }

    const handlerDashboardShowOptions = (option: "rooms" | "descriptions") => {
        setDashboardShowOptions(option)
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
                        handlerDashboardShowOptions("rooms")
                    }}
                >
                    Ver salas
                </Button>

                <Button 
                    onClick={() => {
                        handlerDashboardShowOptions("descriptions")
                    }}
                >
                    Ver descrições
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
                                autofocus
                                name="Nome da sala"
                                placeholder="Digite o nome da sala"
                                value={[newRoomName, setNewRoomName]}
                            />
                            <Button onClick={() => {
                                createNewRoom()
                                handlerShowNewRoom()
                            }}>
                                Criar
                            </Button>
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
                                autofocus
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
                
                {descriptionsOnRoom.length > 0 && (
                    <Modal
                        functions={handlerDescriptionsOnRoomList}
                    >
                        <section>
                            {
                                descriptionsOnRoom.map(({data, ref}) => (
                                    <CardDescription key={data.url}>
                                        <img src={data.url} />
                                        <p>{data.nickName}</p>
                                        <div>
                                            <p>Who: {data.who}</p>
                                            <p>What: {data.what}</p>
                                            <p>When: {data.when}</p>
                                            <p>Where: {data.where}</p>
                                            <p>Why: {data.why}</p>
                                        </div>
                                        <div>
                                            <h4>Comentários</h4>
                                            {data.comments.map((comment, i) => (
                                                <p key={i}>{comment}</p>
                                            ))}
                                        </div>
                                        
                                        <Button 
                                            onClick={() => addNewCommentOnDescription(ref["@ref"].id, data.comments)}
                                        >
                                            Comentar
                                        </Button>
                                    </CardDescription>
                                ))
                            }
                        </section>
                    </Modal>
                )}

                {dashboardShowOptions == "rooms" && (
                    <section>
                        <SubTitle>Veja aqui suas salas</SubTitle>
                        {
                            (roomsList.length > 0) ? (
                                <div>
                                    {roomsList.map((room, i) => (
                                        <ItemListRoom key={i}>
                                            <label
                                                onClick={() => getDescriptionsOnRoom(room.data.roomName)}
                                            >{room.data.roomName}</label>
                                            <RoundedButton onClick={() => {
                                                deleteRoom(room.ref["@ref"].id)}}
                                            >
                                                <AiOutlineDelete />
                                            </RoundedButton>
                                        </ItemListRoom>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p>
                                        Nenhuma sala encontrada
                                    </p>
                                </div>
                            )
                        }
                            <Button onClick={() => setShowNewRoom(!showNewRoom)}>
                                Criar nova sala
                            </Button>
                    </section>
                )}

                {dashboardShowOptions == "descriptions" && (
                    <section>
                        <SubTitle>Veja aqui suas descrições</SubTitle>
                        <div>
                            {descriptionsList.length > 0
                                ? descriptionsList.map((desc, i) => (
                                    <div key={i}>
                                        <img 
                                            src={desc.data.url}
                                        />
                                        <RoundedButton onClick={() => {
                                            deleteDescription(desc.ref["@ref"].id)}}
                                        >
                                            <AiOutlineDelete />
                                        </RoundedButton>
                                            
                                    </div>
                                ))
                                : (
                                    <>
                                        <p>
                                            Nenhuma descrição encontrada
                                        </p>
                                        <Button onClick={() => setShowEnterInRoom(!showEnterInRoom)}>
                                            Entre em uma sala
                                        </Button>
                                    </>
                                )
                            }
                        </div>
                    </section>
                )}
            </MainContent>

        </Wrapper>
    )
}