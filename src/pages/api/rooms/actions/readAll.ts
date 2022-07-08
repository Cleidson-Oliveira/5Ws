import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

function HandlerGetAllRooms (req: NextApiRequest, res: NextApiResponse) {
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

export default HandlerGetAllRooms;