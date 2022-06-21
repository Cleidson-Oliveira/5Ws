import { useSession, signIn, signOut } from "next-auth/react";
import Buttons from "../Button";
import { FcGoogle } from "react-icons/fc";

export default function OAuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
        <>
            {/* Signed in as {session.user?.name} */}
            <Buttons.Button onClick={() => signOut()}>
                <FcGoogle />
                Sign out
            </Buttons.Button>
        </>
        )
    }
    return (
        <>
            <Buttons.Button onClick={() => signIn()}>
                <FcGoogle />
                Sign in with Google
            </Buttons.Button>
        </>
        
    )
}