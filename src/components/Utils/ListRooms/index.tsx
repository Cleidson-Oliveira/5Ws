import { AiOutlineDelete } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { Button, RoundedButton } from "../Button";
import { List, Wrapper } from "./style";

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

interface ListRoomProps { 
    roomsList: RoomsListType[],
    deleteRoom: (ref: string) => void,
    getDescriptionsOnRoom: (roomname: string) => void,
}

export function ListRoom ({ roomsList, deleteRoom, getDescriptionsOnRoom }: ListRoomProps) {
    const copy = (value: string) => {

        navigator.clipboard.writeText(value)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    }

    return (
        <List>
            {roomsList.map((room, i) => (
                <Wrapper key={i} >
                    <div>
                        <p>
                            Nome:
                            <span>
                                {room.data.roomName}
                            </span>
                        </p>
                    </div>
                    <div title="Copy">
                        <p>
                            Código:
                            <span className="pointer" onClick={() => copy(room.data.roomCode)}>
                                {room.data.roomCode}
                            </span>
                            <FaRegCopy 
                                onClick={() => copy(room.data.roomCode)}
                            />
                        </p>
                    </div>
                    <div>
                        <Button onClick={() => getDescriptionsOnRoom(room.data.roomName)} >
                            Ver
                        </Button>
                        <RoundedButton onClick={() => {
                            deleteRoom(room.ref["@ref"].id)}}
                        >
                            <AiOutlineDelete />
                        </RoundedButton>
                    </div>
                </Wrapper>
            ))}

        </List>
    )
}