import { NextApiRequest, NextApiResponse } from "next";

import HandlerGetRooms from "./read";
import HandlerCreateRooms from "./create";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType } = req.query;

    switch (actionType) {
        case "create":
            HandlerCreateRooms(req, res);            
            break;

        case "read":
            HandlerGetRooms(req, res);
            break;

        default:
            break;
    }
}