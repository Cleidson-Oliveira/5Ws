import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;
`;

export const AsideContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: ${Colors.color5};
    padding-top: 1rem;
    flex-grow: 1;
    min-width: 20vw;

    button {
        width: 75%;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 3rem;
    flex-grow: 4;
    box-sizing: border-box;
    background-color: ${Colors.color4};

    section {
        padding: 2rem 3rem;
        border: 1px solid ${Colors.color5};
        border-radius: 5px;
        background-color:  ${Colors.color5};

        & + section {
            margin-top: 1rem; 
        }

        div {
            img {
                width: 20%;
                margin: .5rem;
                cursor: pointer;
            }
        }
    }
`;

export const ItemListRoom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid ${Colors.color1};
    margin-bottom: 1rem;
    color: ${Colors.color1};
    padding: .5rem;

    label {
        cursor: pointer;
    }

    button {
        margin: 0;
    }
`;

export const CardDescription = styled.article`
    width: 30%;
    display: flex;
    flex-direction: column;

    img {
        width: 60%;
    }

    p {
        margin: 10px 0;
    }
`;