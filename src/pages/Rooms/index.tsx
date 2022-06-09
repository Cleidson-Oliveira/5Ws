import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";

import { GlobalStyle } from "../../styles/Global";
import { Wrapper } from "./style";

export default function Rooms () {
    return (
        <>
            <Head><title>5Ws | Salas</title></Head>
            <GlobalStyle />
            <Header page="Rooms"/>
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
            <Footer />
        </>
    )
}