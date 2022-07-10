import { NextApiRequest, NextApiResponse } from "next";

import HandlerCreateDescription from "./actions/create";
import { HandlerGetAllDescriptionsByNickName, HandlerGetAllDescriptionsByRoomName } from "./actions/read";
import { addNewCommentOnDescription } from "./actions/update";
import HandlerDeleteDescription from "./actions/delete";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType } = req.query;

    switch (actionType) {
        case "create":
            HandlerCreateDescription(req, res);            
            break;

        case "readByNickName":
            HandlerGetAllDescriptionsByNickName(req, res);
            break;

        case "readByRoomName":
            HandlerGetAllDescriptionsByRoomName(req, res);
            break;
            
        case "addComments":
            addNewCommentOnDescription(req, res);
            break;
        
        case "delete":
            HandlerDeleteDescription(req, res);
            break;

        default:
            break;
    }
}