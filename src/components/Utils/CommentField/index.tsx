import { Wrapper } from "./style";

interface CommentFieldProps {
    children: JSX.Element[]
}

export function CommentField ({ children }: CommentFieldProps) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}