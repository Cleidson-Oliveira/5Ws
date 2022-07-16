import { AiOutlineDelete } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { RoundedButton } from "../Button";
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
                    <div onClick={() => getDescriptionsOnRoom(room.data.roomName)} >
                        <p>
                            <span>Nome:</span>
                            {room.data.roomName}
                        </p>
                    </div>
                    <div title="Copy">
                        <p>
                            <span>Código:</span>
                            {room.data.roomCode}
                            <FaRegCopy 
                                onClick={() => copy(room.data.roomCode)}
                            />
                        </p>
                    </div>
                    <div>
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