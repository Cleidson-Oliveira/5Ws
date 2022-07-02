import { IoMdClose } from "react-icons/io"
import Buttons from "../Utils/Button";
import { Wrapper } from "./style";

const {RoundedButton} = Buttons;

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