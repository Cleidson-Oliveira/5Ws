import Button from "../Utils/Button";
import Input from "../Utils/Input";
import { Wrapper } from "./style";

export default function Main () {
    return (
        <Wrapper>
            <section>
                <img src="https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_960_720.jpg" />
            </section>
            <section>
                <Input name="Who" placeholder="Quem está na foto?"/>
                <Input name="What" placeholder="O que está acontecendo?"/>
                <Input name="When" placeholder="Em que momento está acontecendo?"/>
                <Input name="Where" placeholder="Descreva o local da imagem!"/>
                <Input name="Why" placeholder="Por que?"/>
                <Button />
            </section>
        </Wrapper>
    )
}