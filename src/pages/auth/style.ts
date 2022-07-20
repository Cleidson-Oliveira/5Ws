import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2.5rem 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        min-width: 320px;
        padding: 2.5rem 0;
        border: 1px solid black;
        border-radius: 1rem;

        button {
            width: 80%;
        }
    }

    @media only screen and (max-width: 600px) {
        div {
            border: none;
        }
    }

`;

export default Wrapper