import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 2.5rem;

    & > div.roomBy {
        width: 100%;
        padding-left: 3rem;
    }

    section {
        width: 50%;
        padding: 1rem;
        box-sizing: border-box;

        img {
            width: 100%;
        }
    }

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        padding: .3rem;

        & > div.roomBy {
            padding-left: 2rem;
        }
        
        section {
            width: 100%;
            box-sizing: border-box;
            padding: .5rem 1rem 1rem;
            
            div {

                button {
                    bottom: 1rem;
                    right: 1rem;
                }
            }
        }
    }
`;

export default Wrapper;