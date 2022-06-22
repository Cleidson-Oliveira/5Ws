import { useSession, signIn, signOut } from "next-auth/react";

import Buttons from "../Button";

export default function OAuthButton() {

    const { data: session } = useSession();

    if (session) {
        return (
        <>
            {/* Signed in as {session.user?.name} */}
            <Buttons.Button onClick={() => signOut()}>
                Sign Out
            </Buttons.Button>
        </>
        )
    }
    return (
        <>
            <Buttons.Button onClick={() => signIn()}>
                Sign In
            </Buttons.Button>
        </>
    )
}