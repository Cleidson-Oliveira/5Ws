import styled from "styled-components";

import { Colors } from "../../styles/Colors";

export const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: ${Colors.color1};
    color: ${Colors.color4};

    a {
        font-weight: 600;
    }
`;