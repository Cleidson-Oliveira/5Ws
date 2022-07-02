import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;
    padding: 3rem 0;
`;

export const AsideContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-width: 20vw;
    background-color: ${Colors.color2};
    padding-top: 1rem;
    
    button {
        width: 75%;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-width: 65vw;
    padding: 3rem;
    box-sizing: border-box;
    background-color: ${Colors.color2};

    section {
        padding: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;

        & + section {
            margin-top: 1rem; 
        }
    }
`;

