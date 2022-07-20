import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    
    button {
        position: absolute;
        bottom: 30px;
        right: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        & svg {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 700px) {
        button {
            width: 2rem;
            height: 2rem;
        }
    }
`;