import { useSession } from "next-auth/react";
import { Avatar } from "../Avatar";
import { Title } from "../Title/intex";
import { Wrapper } from "./style";

export function Profile () {

    const {data: session} = useSession();

    return (
        <Wrapper>
            <Avatar avatarUrl={session?.user?.image as string}/>
            <Title>{session?.user?.name}</Title>
        </Wrapper>
    )
}