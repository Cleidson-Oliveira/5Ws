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
                <Input name="Who" placeholder="who"/>
                <Input name="What" placeholder="What"/>
                <Input name="When" placeholder="When"/>
                <Input name="Where" placeholder="Where"/>
                <Input name="Why" placeholder="Why"/>
                <Button />
            </section>
        </Wrapper>
    )
}