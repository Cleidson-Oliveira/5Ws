import styled from "styled-components";
import { Colors } from "../../styles/Colors";

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 300px;
    padding: 2.5rem 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        min-width: 320px;
        padding: 2.5rem 0;
        border: 1px solid ${Colors.color1};
        border-radius: 1rem;

        h5 {
            color: ${Colors.color1};
            font-size: 1.2rem;
            font-weight: 500;
        }

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