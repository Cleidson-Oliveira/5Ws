import styled from "styled-components";
import { darken } from 'polished'

import { Colors } from "../../../styles/Colors";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 350px;
    height: 35px;
    border-radius: 5px;
    background-color: ${darken(0.1, Colors.color5)};
    color: ${Colors.color1};
    border: 1px solid ${Colors.color5};
    cursor: pointer;
    margin-top: 20px;
    transition: all .3s ease;
    font-weight: 600;

    :hover {
        color: ${Colors.color5};
        background-color: ${Colors.color1};
        box-shadow: ${Colors.color1} 0px 0px 10px 0px;
        border: none;
    }

    svg {
        margin-right: 15px;
    }
`;

export const RoundedButton = styled(Button)`
    width: 36px;
    height: 36px;
    border-radius: 50%;

    svg {
        margin: 0px;
        font-size: 1.1rem;
    }
`;