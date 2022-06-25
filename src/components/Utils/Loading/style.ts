import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    color: ${Colors.color1};
`;

export const SpinComponent = styled.div`

    .spinItem {
        font-size: 2rem;
        margin: 15px;

        animation: spin 1s infinite;

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    }
`;