import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(12, 8%);
    grid-template-rows: 150px 300px 150px 350px 150px;
    justify-content: center;
    width: 100%;
    background-color: ${Colors.color5};
    color: ${Colors.color1};
    padding: 40px 0;

    & > h1 {
        grid-column: 2/12;
        grid-row: 1/2;
        font-size: 2rem;
        text-align: center;
    }
    
    & > h2 {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        grid-column: 2/12;
        grid-row: 3/4;
        font-size: 1.5rem;
    }

    & section:nth-child(2) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        grid-column: 2/12;
        grid-row: 2/3;
        
        div {
            transform: translateX(-150px);
            transition: opacity .5s ease, transform .5s ease;
            opacity: 0;
            margin-top: 1rem;
            
            h2 {
                font-size: 1.5rem;
                line-height: 4rem;
                text-transform: uppercase;
                font-weight: 100;
            }
            
            p {
                font-size: 1.2rem;
                line-height: 1.5rem;
            }
        }
        
        img {
            width: 40%;
            opacity: 0;
            transform: translateX(150px);
            transition: opacity .5s ease, transform .5s ease;
        }
        
        &.anima {
            div, img {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }

    & section:nth-child(4) {
        grid-column: 1/13;
        grid-row: 4/5;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 50px;

        p {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 80%;
            opacity: 0;
            transform: translateX(200px);
            transition: all .5s ease;

            span {
                display: block;
                font-size: 1.4rem;
                
                & ~ span {
                    margin-top: 1rem;
                }

                b {
                    font-size: 1.4rem;
                    font-weight: 100;
                }

                i {
                    margin-left: .5rem;
                }
            }
        }

        img {
            height: 100%;
            max-height: 350px;
            width: auto;
            opacity: 0;
            transform: translateX(-200px);
            transition: all .5s ease;
        }

        &.anima {
            p, img {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }

    & section:nth-child(5) {
        grid-column: 4/10;
        grid-row: 5/6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        h2 {
            line-height: 2rem;
            font-size: 1.5rem;
        }
    }
`;