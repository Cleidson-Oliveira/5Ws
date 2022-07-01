import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../../services/faunadb";
import { query as q} from 'faunadb';

function ErrorHandler () {
  throw "error"
}

function HandlerCreateRoom ( req: NextApiRequest, res: NextApiResponse ) {
  const { body } = req;
  fauna.query(
    q.If(
      q.Not(
        q.Exists(
          q.Match(
              q.Index("rooms_by_name"),
              body.roomName
          )
        )
      ),
      q.Create(
        q.Collection('5Ws_Rooms'),
        {
          data: {
            ...body
          },
        }
      ),
      {created: false},
    )
  )
  .then((createdRoomData) => {
    res.status(201).json(createdRoomData)
  })
  .catch((err) => console.error(
      'Error: [%s] %s: %s',
      err.name,
      err.message,
      err.errors()[0].description,
    )
  )
}

export default HandlerCreateRoom;