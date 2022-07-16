import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

interface DataType {
    data: { 
        roomCode: string,
        createdBy: string,
        roomName: string 
    }
}

export function HandlerGetAllRooms (req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.Map(
            q.Paginate(
                q.Match(
                    q.Index("rooms_by_createdBy"),
                    body.userName
                ),
                { size: 10 }
            ),
            q.Lambda(room => q.Get(room))
        )
    )  
    .then((readedRoomData) => {
        res.status(201).json(readedRoomData)
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))
}

export function HandlerGetExistesRoom (req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.If(
            q.Exists(
                q.Match(
                    q.Index("rooms_by_codeRoom"),
                    body.roomCode
                )
            ),
            q.Get(
                q.Match(
                    q.Index("rooms_by_codeRoom"),
                    body.roomCode
                )
            ),
            false,
        )
    )  
    .then((roomData) => {
        if (!roomData){
            res.status(200).json({roomExist: false})
        } else {
            const { data } = roomData as DataType;
            res.status(200).json({...data, roomExist: true})
        }
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))
        
}