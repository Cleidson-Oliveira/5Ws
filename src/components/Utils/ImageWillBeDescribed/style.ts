import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

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
`;