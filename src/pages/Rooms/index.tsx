import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession} from "next-auth/react";

import Header from "../../components/Header";
import Loading from "../../components/Utils/Loading";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../styles/Global";

export default function Rooms () {

    const router = useRouter();
    const session = useSession();
    
    useEffect(() => {
        if (session.status == "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [session])

    return (
        <>
            <Head><title>5Ws | Dashboard</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
            {session.status != "authenticated" ? <Loading /> : <Dashboard />}
            <Footer />
        </>
    )
}