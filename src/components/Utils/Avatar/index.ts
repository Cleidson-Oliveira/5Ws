import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

interface AvatarProps {
    avatarUrl: string
}

export const Avatar = styled.button<AvatarProps>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-image: url(${props => props.avatarUrl});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    border: ${Colors.color1} 3px solid;
`;