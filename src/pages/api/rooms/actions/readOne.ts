import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

function HandlerGetRoom (req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.If(
            q.Exists(
                q.Match(
                    q.Index("rooms_by_name"),
                    body.roomName
                )
            ),
            true,
            false,
        )
    )  
    .then((roomExistes) => {
        res.status(200).json({roomExistes})
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))
}

export default HandlerGetRoom;