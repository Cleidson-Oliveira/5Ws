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
        padding: 2.5rem 0;
        border: 1px solid black;
        border-radius: 1rem;

        button {
            width: 80%;
        }
    }
`;

export default Wrapper