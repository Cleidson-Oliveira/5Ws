import { Wrapper } from "./style";
import Buttons from "../Button";

import { BsArrowRepeat } from 'react-icons/bs'

const { RoundedButton } = Buttons;

interface ImageProps {
    src: string
}
export default function Image ({ src }: ImageProps) {
    return (
        <Wrapper>
            <img src={src} />
            <RoundedButton>
                <BsArrowRepeat />
            </RoundedButton>
        </Wrapper>
    )
}