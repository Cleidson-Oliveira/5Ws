import { NextApiRequest, NextApiResponse } from "next";

import HandlerCreateDescription from "./actions/create";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { actionType } = req.query;

    switch (actionType) {
        case "create":
            HandlerCreateDescription(req, res);            
            break;

        default:
            break;
    }
}