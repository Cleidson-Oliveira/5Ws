import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr .8fr 1fr;
    width: 25%;
    min-width: 200px;
    border: 1px solid ${Colors.color1};
    border-radius: .3rem;
    margin-bottom: 1rem;
    color: ${Colors.color1};
    padding: 1rem;
    background-color: #ffffff50;
    box-shadow: black 5px 5px 20px -5px;

    div {
        margin: .4rem 0;
        
        p {
            font-size: 1.3rem;
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            font-weight: bold;
            
            span {
                font-size: inherit;
                font-weight: normal;
            }
            
            span.pointer {
                cursor: pointer;
            }

            button {
                cursor: pointer;
                font-size: 1rem;

                svg {
                    font-size: inherit;
                }
            }
        }
    }
    & div:nth-child(1) {
        grid-column: 1/7;
        grid-row: 1/2;
    }
    & div:nth-child(2) {
        grid-column: 1/7;
        grid-row: 2/3;
    }
    & div:nth-child(3) {
        display: flex;
        justify-content: space-around;
        grid-column: 1/7;
        grid-row: 4/5;
    }

    button {
        margin: 0;
    }
`;