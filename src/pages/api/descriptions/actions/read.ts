import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

export function HandlerGetAllDescriptionsByNickName(req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.Map(
            q.Paginate(
                q.Match(
                    q.Index("descriptions_by_nickname"),
                    body.userName
                ),
                { size: 10 }
            ),
            q.Lambda(description => q.Get(description))
        )
    )  
    .then((readedDescriptionsData) => {
        res.status(201).json(readedDescriptionsData)
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))
}

export function HandlerGetAllDescriptionsByRoomName(req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.Map(
            q.Paginate(
                q.Match(
                    q.Index("descriptions_by_roomName"),
                    body.roomName
                ),
                { size: 100 }
            ),
            q.Lambda(description => q.Get(description))
        )
    )  
    .then((readedDescriptionsData) => {
        res.status(200).json(readedDescriptionsData)
    })
    .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
    ))
}