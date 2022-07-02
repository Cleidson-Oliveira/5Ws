import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

function HandlerDeleteRoom ( req: NextApiRequest, res: NextApiResponse ) {
    const { body } = req;
    console.log(body.ref)
    fauna.query(
        q.Delete(
            q.Ref(
                q.Collection('5Ws_Rooms'),
                body.ref
            )
        )
    )
    .then((deletedRoomData) => {
        res.status(200).json(deletedRoomData)
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
        )
    )
}

export default HandlerDeleteRoom;