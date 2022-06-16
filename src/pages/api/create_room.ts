import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../services/faunadb";
import { query as q} from 'faunadb';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  console.log(body)
  fauna.query(
    q.Create(
        q.Collection('5Ws_Rooms'),
        {
            data: {
                ...body
            },
        }
    )
  )
  .then((ret) => console.log(ret))
  .catch((err) => console.error(
    'Error: [%s] %s: %s',
    err.name,
    err.message,
    err.errors()[0].description,
  ))

  res.status(201).json({ success: true })
}