import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Wrapper = styled.div`
    width: 100%;
    height: 55vh;
    background: url("https://cdn.pixabay.com/photo/2018/02/08/11/10/personal-3139194_960_720.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${Colors.color1};
    display: flex;
    justify-content: center;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(200, 230, 255, .75);
    }
    p {
        display: block;
        width: 60%;
        font-size: 2.5rem;
        text-align: center;
        text-shadow: #7a7777 2px 2px 3px;
    }
`;