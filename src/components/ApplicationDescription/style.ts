import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.section`
    width: 100%;
    background-color: ${Colors.blueLight};
    color: ${Colors.blue4};
    display: flex;
    justify-content: center;
    padding: 30px 0;

    p {
        display: inline-block;
        font-size: 2.5rem;
        text-align: center;
        width: 55%;
    }
`;