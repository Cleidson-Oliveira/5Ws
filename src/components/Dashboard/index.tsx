import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import axios from "axios";

import { Wrapper, AsideContent, MainContent } from "./style";
import { SubTitle, Title } from "../Utils/Title/intex";
import Input from "../Utils/Input";
import { Button, RoundedButton } from "../Utils/Button";
import { Modal } from "../Modal";
import { CommentField } from "../Utils/CommentField";
import { ListRoom } from "../Utils/ListRooms";

import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai";
import { Profile } from "../Utils/Profile";
import { CardDescription } from "../Utils/CardDescription";

interface Comment {
    name: string,
    urlImage: string,
    comment: string
}

interface RoomsListType {
    data: {
        userName: string,
        roomName: string,
        roomCode: string
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
        comments: Comment[],
    },
    ref: {
        "@ref": {
            id: string
        }
    }
}

interface DashboardProps {
    descriptionsList: DescriptionsListType[],
    roomsList: RoomsListType[],
}

export default function Dashboard ({
    descriptionsList: descriptionsListProps,
    roomsList: roomListProps
}: DashboardProps) {

    const router = useRouter();
    const {data: session} = useSession();

    const [roomsList, setRoomsList] = useState<RoomsListType[]>(roomListProps);
    const [descriptionsOnRoom, setDescriptionsOnRoom] = useState<DescriptionsListType[]>([]);
    const [descriptionsList, setDescriptionsList] = useState<DescriptionsListType[]>(descriptionsListProps);
    const [newRoomName, setNewRoomName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [showNewRoom, setShowNewRoom] = useState(false);
    const [showEnterInRoom, setShowEnterInRoom] = useState(false);
    const [dashboardShowOptions, setDashboardShowOptions] = useState<"rooms" | "descriptions">("rooms");

    const createNewRoom = async () => {
        try {
            if (newRoomName == '') {
                throw new Error ("Digite um nome para a sala");
            }

            const roomCode = Math.random().toString(36).substring(2, 10);

            const userName = session?.user?.name as string;
            const createdData = await axios.post('api/rooms/create', {
                roomCode,
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
    
    const getDescriptionsOnRoom = async (roomName: string) => {
        const desc = await axios.post('api/descriptions/readByRoomName', {
            roomName
        });
        if (desc.data.data.length > 0) {
            setDescriptionsOnRoom(desc.data.data)
        } else {
            alert("Não existem descrições nesta sala")
        }

    }
    
    const enterInRoom = async () => {
        const rooms = await axios.post('api/rooms/verifyIfExistRoom', {
            roomCode
        })

        if (rooms.data.roomExist) {
            router.push(`/app5Ws/${rooms.data.roomName}`);
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

    const addNewCommentOnDescription = async (ref: string, prevComments: Comment[]) => {
        try {
            const comment = document.getElementById(`comment-${ref}`) as HTMLInputElement
            const comments = prevComments;
            if (comment.value == '') {
                throw new Error("Digite um comentário!")
            }
            
            setDescriptionsList(prevState => (
                prevState.map(description => (
                    description.ref["@ref"].id == ref
                    ? { ref : description.ref, data: {...description.data, comments}}
                    : description
                ))
            ))

            comments.push({
                name: session?.user?.name as string,
                urlImage: session?.user?.image as string,
                comment: comment.value
            });
            comment.value = "";
            
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

    return (
        <Wrapper>
            <AsideContent>
                <Title>Dashboard</Title>
                {/* <Profile /> */}
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
                                name="Código da sala"
                                placeholder="Digite o código da sala"
                                value={[roomCode, setRoomCode]}
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
                                descriptionsOnRoom.map((desc, i) => (
                                    <CardDescription
                                        key={i}
                                        desc={desc}
                                        addNewCommentOnDescription={addNewCommentOnDescription}
                                    />
                                ))
                            }
                        </section>
                    </Modal>
                )}

                {dashboardShowOptions == "rooms" && (
                    <section>
                        <SubTitle>Veja aqui suas salas</SubTitle>
                        <div>
                            {(roomsList.length > 0) ? (
                                <ListRoom
                                    roomsList={roomsList}
                                    deleteRoom={deleteRoom}
                                    getDescriptionsOnRoom={getDescriptionsOnRoom}
                                />
                            ) : (
                                <p>
                                    Nenhuma sala encontrada
                                </p>
                            )}
                            <Button onClick={() => setShowNewRoom(!showNewRoom)}>
                                Criar nova sala
                            </Button>
                        </div>
                    </section>
                )}

                {dashboardShowOptions == "descriptions" && (
                    <section>
                        <SubTitle>Veja aqui suas descrições</SubTitle>
                        <div>
                            {descriptionsList.length > 0
                                ? descriptionsList.map((desc, i) => (
                                    <CardDescription
                                        key={i}
                                        desc={desc}
                                        addNewCommentOnDescription={addNewCommentOnDescription}
                                        deleteDescription={deleteDescription}
                                    />
                                ))
                                : (
                                    <p>
                                        Nenhuma descrição encontrada
                                    </p>
                                )
                            }
                            <Button onClick={() => setShowEnterInRoom(!showEnterInRoom)}>
                                Entre em uma sala
                            </Button>
                        </div>
                    </section>
                )}
            </MainContent>

        </Wrapper>
    )
}