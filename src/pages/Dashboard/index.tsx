import Head from "next/head";
import { useEffect } from "react";
import { useSession, getSession} from "next-auth/react";
import { GetServerSideProps } from "next";

import axios from "axios";

import Header from "../../components/Header";
import Loading from "../../components/Utils/Loading";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../styles/Global";

interface RoomsListType {
    data: {
        userName: string,
        roomName: string,
        roomCode: string
    },
    ref: {
        "@ref": {
            id: string
        }
    }
}

interface DescriptionsListType {
    data: {
        roomName: string,
        nickName: string,
        url: string,
        who: string,
        what: string,
        when: string,
        where: string,
        why: string,
        comments: string[],
    },
    ref: {
        "@ref": {
            id: string
        }
    }
}

interface DashboardProps {
    descriptionsList: DescriptionsListType[],
    roomsList: RoomsListType[],
}

export default function Rooms ({ descriptionsList, roomsList }: DashboardProps) {

    const session = useSession();

    return (
        <>
            <Head><title>5Ws | Dashboard</title></Head>
            <GlobalStyle />
            <Header page="Dashboard"/>
            {
                session.status != "authenticated" 
                ? <Loading /> 
                : <Dashboard 
                    descriptionsList={descriptionsList}
                    roomsList={roomsList}
                />
            }
            <Footer />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const userSession = await getSession(context);

    if (!userSession) {
        context.res.setHeader('location', '/auth/signin');
        context.res.statusCode = 302;
        context.res.end();
    }

    const searchParams = { userName: userSession?.user?.name };

    const baseUrl = process.env.ENVIRONMENT == "development" ? "http://localhost:3000" : "https://5-ws.vercel.app"

    const rooms = await axios.post(`${baseUrl}/api/rooms/readAll`, searchParams);
    const desc = await axios.post(`${baseUrl}/api/descriptions/readByNickName`, searchParams);

    const roomsList = rooms.data.data;
    const descriptionsList = desc.data.data;

    return {
        props: {
            descriptionsList,
            roomsList
        },
    }
}