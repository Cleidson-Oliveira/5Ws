import { IoMdClose } from "react-icons/io"
import { Wrapper } from "./style";
import { RoundedButton } from "../Utils/Button";

interface ModalProps {
    children: JSX.Element,
    functions: () => void
}
export function Modal ({ children, functions }: ModalProps) {
    return (
        <Wrapper>
            <RoundedButton onClick={() => {functions()}}>
                <IoMdClose />
            </RoundedButton>
            {children}
        </Wrapper>
    )
}