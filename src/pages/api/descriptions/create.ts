// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../../services/faunadb";
import { query as q} from 'faunadb';

function HandlerCreateDescription (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  
  fauna.query(
    q.Create(
      q.Collection('5Ws_Descriptions'),
      {
        data: {
          ...body
        },
      },
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

export default HandlerCreateDescription;