import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    min-width: 200px;
    border: 1px solid ${Colors.color1};
    border-radius: .3rem;
    margin-bottom: 1rem;
    color: ${Colors.color1};
    padding: 1rem;

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

            svg {
                cursor: pointer;
                font-size: 1.2rem;
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
        grid-row: 3/4;
    }

    button {
        margin: 0;
    }

    
`;