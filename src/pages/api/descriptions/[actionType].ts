import { NextApiRequest, NextApiResponse } from "next";

import HandlerCreateDescription from "./actions/create";
import HandlerGetAllDescription from "./actions/read";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType } = req.query;

    switch (actionType) {
        case "create":
            HandlerCreateDescription(req, res);            
            break;

        case "read":
            HandlerGetAllDescription(req, res);
            break;
            
        default:
            break;
    }
}