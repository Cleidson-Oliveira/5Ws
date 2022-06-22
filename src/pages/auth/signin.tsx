import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import Head from "next/head";

import { FcGoogle } from "react-icons/fc";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Buttons from "../../components/Utils/Button";
import { GlobalStyle } from "../../styles/Global";
import { Wrapper } from "./style";

interface SignInProps {
    providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}
export default function SignIn({ providers }: SignInProps) {

    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="SignIn"/>
            <Wrapper>
                <div>
                    <p>Sign In With</p>
                    {Object.values(providers).map((provider) => (
                        <Buttons.Button
                            key={provider.name}
                            onClick={() => signIn(provider.id)}>
                            {provider.name == "Google" && <FcGoogle />}
                            {provider.name}
                        </Buttons.Button>
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