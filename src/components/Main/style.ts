import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(6, 16%);
    grid-template-rows: 150px 250px 250px 200px 350px;
    grid-column-gap: 1fr;
    justify-content: center;
    width: 100%;
    background-color: ${Colors.color5};
    color: ${Colors.color1};
    padding: 40px 0;

    img {
        width: 50%;
    }

    h1 {
        grid-column: 2/6;
        grid-row: 1/2;
        font-size: 2rem;
        text-align: center;
    }

    section {
        display: flex;
        align-items: flex-start;

        p {
            display: inline-block;
            font-size: 1.3rem;
        }
    }
    
    & section:nth-child(2) {
        grid-column: 2/5;
        grid-row: 2/3;
        opacity: 0;
        transform: translateX(200px);
        transition: all .5s ease;
        
        &.anima {
            transform: translateX(0);
            opacity: 1;
        }

        img {
            margin-right: 20px;
        }
    }

    & section:nth-child(3) {
        grid-column: 3/6;
        grid-row: 3/4;
        opacity: 0;
        transform: translateX(-200px);
        transition: all .5s ease;
        
        &.anima {
            transform: translateX(0);
            opacity: 1;
        }

        p {
            text-align: right;
        }

        img {
            margin-left: 20px;
        }
    }

    & section:nth-child(4) {
        grid-column: 2/6;
        grid-row: 4/5;
        justify-content: space-around;
        
        &.anima {

            article {
                transform: scale(1, 1);
                opacity: 1;
            }
            
        }

        article {
            box-sizing: border-box;
            height: 80%;
            width: 40%;
            padding: 30px;
            border-radius: 10px;
            background-color: ${Colors.blue4};
            text-align: center;
            opacity: 0;
            transform: scale(.5, .5);
            transition: all .5s ease;
            
            p {
                font-size: 1.1rem;
                padding: 0;
                color: ${Colors.color3};
            }
        }
    }

    & section:nth-child(5) {
        grid-column: 1/7;
        grid-row: 5/6;
        display: flex;
        justify-content: space-evenly;

        &.anima {
            p, img {
                opacity: 1;
                transform: translateX(0);
            }
        }

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

                b {
                    font-size: 1.4rem;
                }
            }
        }

        img {
            max-height: 350px;
            width: auto;
            opacity: 0;
            transform: translateX(-200px);
            transition: all .5s ease;
        }
    }

`;