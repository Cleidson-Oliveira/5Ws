import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-column-gap: 2%;
    justify-content: center;
    width: 100%;
    background-color: ${Colors.blue1};
    color: ${Colors.blueLight};
    padding: 40px 0;

    img {
        width: 100%;
    }

    & section:first-child {
        grid-column: 1/2;
    }

    & section:last-child {
        grid-column: 2/3;

        display: flex;
        flex-direction: column;

        button {
            align-self: end;
        }
    }
`;