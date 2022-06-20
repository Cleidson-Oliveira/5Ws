// import Link from "next/link";
import { Wrapper } from "./style";
import Buttons from "../Utils/Button";

const { Button } = Buttons;

export default function Controls () {
    return (
        <Wrapper>
            <div>
                <h1>Nickname</h1>
            </div>
            <div>
                <Button>Ver imagens</Button>
            </div>                
        </Wrapper>
    )
}