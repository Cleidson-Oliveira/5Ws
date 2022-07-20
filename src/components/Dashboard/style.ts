import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;
    
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: start;

        & > div {
            width: 100%;
        }
    }
`;

export const AsideContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: ${Colors.color5};
    padding-top: 1rem;
    width: 25%;

    button {
        width: 75%;
    }
    @media only screen and (max-width: 700px) {
        padding: 1rem;
        box-sizing: border-box;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1rem;
    width: 75%;
    box-sizing: border-box;
    background-color: ${Colors.color4};

    section {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 2rem 3rem;
        border: 1px solid ${Colors.color5};
        border-radius: 5px;
        background-color:  ${Colors.color5};

        h2 {
            width: 100%;
        }

        & > div.cardList {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
    }

    @media only screen and (max-width: 700px) {
        section {
            padding: 10px;
        }
    }
`;
