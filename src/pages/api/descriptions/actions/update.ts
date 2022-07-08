import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

export function addNewCommentOnDescription (req: NextApiRequest, res: NextApiResponse) {
    const { body } = req;
    return fauna.query(
        q.Update(
            q.Ref(
                q.Collection('5Ws_Descriptions'),
                body.ref
            ),
            { data: { comments: body.comments } },
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