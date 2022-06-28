import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession} from "next-auth/react";

import Header from "../../components/Header";
import Loading from "../../components/Utils/Loading";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../styles/Global";
import Dashboard from "../../components/Dashboard";

export default function Rooms () {

    const router = useRouter();
    const { data: session } = useSession();
    
    useEffect(() => {
        if (session?.user == null || session?.user == undefined) {
            router.push("/auth/signin");
        }
    }, [session])

    if(session) {
        return (
            <>
                <Head><title>5Ws | Dashboard</title></Head>
                <GlobalStyle />
                <Header page="Rooms"/>
                <Dashboard />
                <Footer />
            </>
        )
    }

    return (
        <>
            <Head><title>5Ws | Dashboard</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            <Loading />
            <Footer />
        </>
    )
}