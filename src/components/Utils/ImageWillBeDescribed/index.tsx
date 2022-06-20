import { Wrapper } from "./style";
import Buttons from "../Button";

import { BsArrowRepeat } from 'react-icons/bs'
import { SetStateAction } from "react";

const { RoundedButton } = Buttons;

interface ImageProps {
    src: string;
    onChangeCurrentUrl: () => void
}
export default function Image ({ src, onChangeCurrentUrl }: ImageProps) {
    return (
        <Wrapper>
            <img src={src} />
            <RoundedButton onClick={() => onChangeCurrentUrl()}>
                <BsArrowRepeat />
            </RoundedButton>
        </Wrapper>
    )
}