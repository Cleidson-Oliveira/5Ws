import { useEffect } from "react";
import { Wrapper } from "./style";

export default function Main () {

    useEffect(() => {    
        const sectionsWillAnimated = document.querySelectorAll(".animate");

        sectionsWillAnimated.forEach((section) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("anima"))
            });
            observer.observe(section!)
        })
    }, [])

    return (
        <Wrapper>
            <h1>Os 5Ws são perguntas norteadoras que ajudam no processo criativo e/ou investigativo.</h1>

            <section className="animate" id="1">
                <img src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg"/>
                <p>Ao iniciar projetos é importante ter estas perguntas respondidas, pois estas repostas poderão guiar o projeto.</p>
            </section>

            <section className="animate" id="2">
                <p>Uma investigação policial pode se iniciar com essas perguntas, e responde-las pode ser um passo importante para a resolução do caso.</p>
                <img src="https://cdn.pixabay.com/photo/2016/06/15/10/10/potatoes-1458569_960_720.jpg"/>
            </section>

            <section className="animate" id="3">
                <article>
                    <p>
                        Os 5Ws são perguntas básicas, úteis para descrição de situações, e com isso uma ótima ferramenta para desenvolver essa habilidade.
                    </p>
                </article>

                <article>
                <p>
                    Descrever situações em outros idiomas ajuda a criar bagagem de vocabulário para aplicar em situações do cotidiano.
                </p>
                </article>
            </section>
  
            <section className="animate" id="4">
                <img src="https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_960_720.jpg" />
                <p>
                    <span>
                        <b>Who:</b> Mulher indiana, Hadija.
                    </span>
                    <span>
                        <b>What:</b> Ela está meditando.
                    </span>
                    <span>
                        <b>When:</b> Provavelmente em uma tarde de verão.
                    </span>
                    <span>
                        <b>Where:</b> O local é proxímo de um rio, com árvores ao fundo.
                    </span>
                    <span>
                        <b>Why:</b> Meditar eleva o estado de espírito.
                    </span>
                </p>
            </section>
            
        </Wrapper>
    )
}