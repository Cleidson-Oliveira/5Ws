import styled from "styled-components";

import { Colors } from "../../styles/Colors";

export const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: ${Colors.blueLight};
    color: ${Colors.blue1};

    a {
        font-weight: 600;
    }
`;