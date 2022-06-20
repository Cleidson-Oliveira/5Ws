import { Wrapper } from "./style";
import Buttons from "../Button";

import { BsArrowRepeat } from 'react-icons/bs'

const { RoundedButton } = Buttons;

interface ImageProps {
    src: string;
    onChangeCurrentUrl: () => void
}
export default function Image ({ src, onChangeCurrentUrl }: ImageProps) {
    return (
        <Wrapper>
            <img src={src} />
            <RoundedButton 
                onClick={() => onChangeCurrentUrl()}
                title='Próxima imagem'
            >
                <BsArrowRepeat />
            </RoundedButton>
        </Wrapper>
    )
}