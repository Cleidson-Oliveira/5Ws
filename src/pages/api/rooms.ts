import type { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from "../../services/faunadb";
import { query as q} from 'faunadb';

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { body } = req;
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
    .then((createdRoomData) => {
      res.status(201).json(createdRoomData)
    })
    .catch((err) => console.error(
      'Error: [%s] %s: %s',
      err.name,
      err.message,
      err.errors()[0].description,
    ))
  } 
  
  if (req.method === "GET") {
    fauna.query(
      q.Get(q.Index('rooms_by_name'))
    )
    .then((roomData) => {
      res.status(200).json(roomData)
    })
    .catch((err) => console.error(
      'Error: [%s] %s: %s',
      err.name,
      err.message,
      err.errors()[0].description,
    ))
  }
}