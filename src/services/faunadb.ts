import { Client } from "faunadb";

export const fauna = new Client({
    secret: process.env.API_KEY_FAUNADB!
})