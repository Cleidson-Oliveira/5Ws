import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Button } from "../../components/Utils/Button";
import { GlobalStyle } from "../../styles/Global";
import Wrapper from "./style";

interface SignInProps {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}
export default function SignIn({ providers }: SignInProps) {

    const router = useRouter();
    const { data: session } = useSession();

    useEffect(()=>{
        if (session?.user) {
            router.push("/Dashboard");
        }
    }, [session])

    const socialIcon = (name: string) => {

        switch (name) {
            case "Facebook":
                return (<FaFacebook />)
                break;
            
            case "Google":
                return (<FcGoogle />)
                break;
        
            default:
                break;
        }
    }

    return (
        <>
            <Head><title>5Ws | Sign In</title></Head>
            <GlobalStyle />
            <Header page="SignIn"/>
            <Wrapper>
                <div>
                    <p>Sign In With</p>
                    {Object.values(providers).map((provider) => (
                        <Button
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                        >
                            {socialIcon(provider.name)}
                            {provider.name}
                        </Button>
                    ))}
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}