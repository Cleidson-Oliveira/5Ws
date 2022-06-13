// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../services/faunadb";
import { query as q} from 'faunadb';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req
  console.log(body)
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

const postSchema = {
  roomCode: String,
  nickName: String,
  descriptions: {
    url: String,
    who: String,
    what: String,
    when: String,
    where: String,
    why: String,
    coments: String
  },
  createdAt: {
      type: Date,
      default: Date.now,
  }
}