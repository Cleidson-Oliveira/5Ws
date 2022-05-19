import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.section`
    width: 100%;
    background-color: ${Colors.blueLight};
    color: ${Colors.font};
    display: flex;
    justify-content: center;
    padding: 40px 0;

    p {
        display: inline-block;
        font-size: 2.5rem;
        text-align: center;
        width: 55%;
        text-shadow: #7a7777 2px 2px 5px;
    }
`;