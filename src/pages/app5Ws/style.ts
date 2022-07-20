import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 2.5rem;

    section {
        width: 50%;
        padding: 1rem;

        img {
            width: 100%;
        }
    }

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        padding: .3rem;
        
        section {
            width: 100%;
            box-sizing: border-box;
            
            div {

                button {
                    bottom: 1rem;
                    right: 1rem;
                }
            }
        }
    }
`;

export const RoomBy = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 4rem;
    padding-left: 4rem;

    h1 {
        margin: 0;
    }

    @media only screen and (max-width: 700px) {
        padding-left: 2rem;
    }
`;