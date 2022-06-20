import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 40px;
    box-sizing: border-box;
    background-color: ${Colors.color4};
    color: ${Colors.color1};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 200px;

        button {
            width: 100%;
            margin: 0;
        }
    }
`;
