import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

export const Wrapper = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    input {
        height: 35px;
        border-radius: 5px;
        border: 1px solid ${Colors.blueLight};
        padding-left: 10px;
        margin-top: 3px;
    }

    & + label {
        margin-top: 20px;
    }
`;