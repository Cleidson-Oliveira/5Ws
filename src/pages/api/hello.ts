// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const postSchema = new mongoose.Schema({
  roomCode: String,
  nickName: String,
  descriptions: {
    url: String,
    who: String,
    what : String,
    when : String,
    where: String,
    why: String,
    coments: String
  },
  createdAt: {
      type: Date,
      default: Date.now,
  }
})

module.exports = mongoose.model("post", postSchema);