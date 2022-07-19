import { useEffect } from "react";
import { Wrapper } from "./style";

export default function Main () {

    useEffect(() => {    
        const sectionsWillAnimated = document.querySelectorAll(".animate");

        sectionsWillAnimated.forEach((section) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("anima"))
            });
            observer.observe(section)
        })
    }, [])

    return (
        <Wrapper>
            <h1>Os 5Ws são perguntas norteadoras que ajudam no processo criativo e/ou investigativo.</h1>

            <section className="animate">
                <div>
                    <h2>A técnica 5Ws no aprendizado de línguas</h2>
                    <p>
                        Descrever situações, para quem está aprendendo um novo idioma, ajuda a criar bagagem de vocabulário para aplicar em situações do cotidiano.
                        Os 5Ws ou <i>word questions</i> são perguntas básicas, úteis para descrição de situações, e com isso uma ótima ferramenta para desenvolver essa habilidade.
                    </p>
                </div>
                <img src="https://cleidson.s3.sa-east-1.amazonaws.com/5ws-min.png"/>
            </section>

            <h2>Como você descreveria a imagem abaixo na língua que está aprendendo?</h2>
  
            <section className="animate">
                <img src="https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_960_720.jpg" />
                <p>
                    <span>
                        <b>Who?</b><br /> <i>Mulher indiana, Hadija.</i>
                    </span>
                    <span>
                        <b>What?</b><br /> <i>Ela está meditando.</i>
                    </span>
                    <span>
                        <b>When?</b><br /> <i>Provavelmente em uma tarde de verão.</i>
                    </span>
                    <span>
                        <b>Where?</b><br /> <i>O local é proxímo de um rio, com árvores ao fundo.</i>
                    </span>
                    <span>
                        <b>Why?</b><br /> <i>Meditar eleva o estado de espírito.</i>
                    </span>
                </p>
            </section>
            
        </Wrapper>
    )
}