import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(6, 16%);
    grid-template-rows: 150px 250px 250px 200px 350px;
    grid-column-gap: 1fr;
    justify-content: center;
    width: 100%;
    background-color: ${Colors.blueLight};
    color: #708197;
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
        
        
        img {
            margin-right: 20px;
        }
    }

    & section:nth-child(3) {
        grid-column: 3/6;
        grid-row: 3/4;

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

        article {
            box-sizing: border-box;
            height: 80%;
            width: 40%;
            padding: 30px;
            border-radius: 10px;
            background-color: ${Colors.blue4};
            text-align: center;
            
            p {
                font-size: 1.1rem;
                padding: 0;
                color: ${Colors.font2};
            }
        }
    }

    & section:nth-child(5) {
        grid-column: 1/7;
        grid-row: 5/6;
        display: flex;
        justify-content: space-evenly;

        p {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 80%;

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
        }
    }

`;