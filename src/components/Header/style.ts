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
        align-items: center;
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

            &.signout {
                background: transparent;

                :hover {
                    background-color: transparent;
                }
            }

            &:hover, &.active {
                color: ${Colors.color1};
                background-color: ${Colors.color3};
                transition: all .3s ease;
            }

        }

    }
    nav > button, .buttonClose {
        display: none;
    }

    @media only screen and (max-width: 600px){
        .buttonClose {
            display: block;
        }
        nav {
            & > button {
                display: block;
                background: none;
                border: none;
                padding: 1rem;

                svg {
                    font-size: 2rem;
                    color: ${Colors.color3};
                }
            }

            ul.hide {
                display: none;
            }
            
            ul.show {
                display: grid;
                justify-items: center;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(12, 1fr);
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: ${Colors.color1};
                z-index: 10;

                li:nth-child(1){
                    grid-row: 1/3;
                    justify-self: end;
                    margin: 2rem;
                    
                    button {
                        background: none;
                        border: none;
                        padding: 1rem;

                        svg {
                            font-size: 2rem;
                            color: ${Colors.color3};
                        }
                    }
                }
                
                li:nth-child(2){
                    grid-row: 6/7;
                }
                
                li:nth-child(3){
                    grid-row: 7/8;
                }

                li.signout, li.signin {
                    grid-row: 11/12;
                    
                    button {
                        display: block;
                    }
                }
            }

        }
    }
`;