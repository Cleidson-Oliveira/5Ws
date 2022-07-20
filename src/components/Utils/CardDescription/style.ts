import styled from "styled-components";

export const Wrapper = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: .3rem;
    background: #ffffff50;

    p {
        margin: 10px 0;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;

    img {
        width: 60%;
    }

    button {
        margin: 0;
    }
`;

export const CardMain = styled.div`
    margin-top: .7rem;

    h4 {
        font-size: 1.1rem;
    }

    & > div {
        margin: .5rem;
    }
`;

export const Comment = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 32px, 1fr;
    align-items: center;
    column-gap: .5rem;
    padding-top: .5rem;
    margin: 0;

    & ~ & {
        border-top: 1px solid #ccc;
    }

    img {
        grid-column: 1/2;
        grid-row: 1/2;
        width: 2rem;
        height: 2rem;
    }
    h5 {
        grid-column: 2/8;
        grid-row: 1/2;
        line-height: 1.7rem;
    }
    p {
        grid-column: 1/8;
        grid-row: 2/3;
    }
`;