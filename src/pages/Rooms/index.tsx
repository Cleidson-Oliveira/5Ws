import Head from "next/head";
import { useState } from "react";

import Header from "../../components/Header";
import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";
import Footer from "../../components/Footer";

import { GlobalStyle } from "../../styles/Global";
import { Wrapper } from "./style";

export default function Rooms () {

    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [why, setWhy] = useState('');

    const enviar = () => {
        console.log( who, what, when, where, why );
        setWho('');
        setWhat('');
        setWhen('');
        setWhere('');
        setWhy('');
    }

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
                    <Input
                        value={[who, setWho]}
                        name="Who"
                        placeholder="Quem está na foto?"
                    />
                    <Input
                        value={[what, setWhat]}
                        name="What"
                        placeholder="O que está acontecendo?"
                    />
                    <Input
                        value={[when, setWhen]}
                        name="When"
                        placeholder="Em que momento está acontecendo?"
                    />
                    <Input
                        value={[where, setWhere]}
                        name="Where"
                        placeholder="Descreva o local da imagem!"
                    />
                    <Input
                        value={[why, setWhy]}
                        name="Why"
                        placeholder="Por que?"
                    />
                    <Button onClick={() => enviar()}>Enviar</Button>
                </section>
            </Wrapper>
            <Footer />
        </>
    )
}