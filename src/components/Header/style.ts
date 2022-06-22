import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 150px;
    padding: 0 40px;
    box-sizing: border-box;
    background-color: ${Colors.color1};
    color: ${Colors.color3};
    
    ul {
        display: flex;
        flex-direction: row;
        gap: 10px;

        li {
            border-radius: 5px;
            
            a {
                display: block;
                cursor: pointer;
                font-weight: 500;
                padding: 10px 20px;
            }

            &.signin {
                color: white;
                background-color: green;
                transition: all .3s ease;

                :hover {
                    background-color: white;
                    color: green;
                }
            }

            &:hover, &.active {
                color: ${Colors.color1};
                background-color: ${Colors.color3};
                transition: all .3s ease;
            }

        }
    }
`;