import { NextApiRequest, NextApiResponse } from "next";

import HandlerGetAllRooms from "./actions/readAll";
import HandlerGetRoom from "./actions/readOne";
import HandlerCreateRooms from "./actions/create";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType } = req.query;

    switch (actionType) {
        case "create":
            HandlerCreateRooms(req, res);            
            break;

        case "readAll":
            HandlerGetAllRooms(req, res);
            break;
        
        case "verifyIfExistRoom":
            HandlerGetRoom(req, res)
            break;

        default:
            break;
    }
}