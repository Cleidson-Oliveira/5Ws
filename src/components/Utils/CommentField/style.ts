import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    position: relative;
    align-items: center;

    input {
        width: 100%;
        min-height: 50px;
        font-size: .8rem;
        border: none;
        border-radius: .3rem;
        padding-left: 1rem;
    }

    button {
        margin: 0;
        position: absolute;
        right: .3rem;
    }

`;