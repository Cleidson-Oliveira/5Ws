import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.section`
    width: 100%;
    background-color: ${Colors.blueLight};
    color: ${Colors.blue4};
    display: flex;
    justify-content: center;
    padding: 40px 0;

    p {
        display: inline-block;
        font-size: 2.5rem;
        text-align: center;
        width: 55%;
        text-shadow: #7a7777 3px 3px 6px;
    }
`;