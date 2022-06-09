import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

const Button = styled.button`
    width: 50%;
    height: 35px;
    border-radius: 5px;
    background-color: ${Colors.blueLight};
    color: ${Colors.blue4};
    border: 1px solid ${Colors.blueLight};
    cursor: pointer;
    margin-top: 20px;
    transition: all .3s ease;
    font-weight: 600;

    :hover {
        color: ${Colors.blueLight};
        background-color: ${Colors.blue1};
        box-shadow: ${Colors.blue4} 5px 5px 10px 0px;
    }
`;

export default Button