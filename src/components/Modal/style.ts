import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;

    & > button {
        position: absolute;
        right: 2rem;
        top: 2rem;
    }

    & > section {
        max-height: 80%;
        max-width: 80%;
        overflow: auto;
    }
`;