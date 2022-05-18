import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    padding: 0 40px;
    box-sizing: border-box;
    background-color: ${Colors.blue1};
    color: ${Colors.blueLight};
    
    ul {
        display: flex;
        flex-direction: row;

        li {
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;

            :hover {
                color: ${Colors.blue1};
                background-color: ${Colors.blueLight};
                transition: all .3s ease;
                box-shadow: ${Colors.blue4}  3px 3px 8px 0px;
            }
        }
    }
`;