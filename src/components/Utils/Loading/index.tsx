import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { SpinComponent, Wrapper } from "./style";

export default function Loading () {
    return(
        <Wrapper>
            <SpinComponent>
                <AiOutlineLoading3Quarters className="spinItem"/>
            </SpinComponent>
            <p>Loading...</p>
        </Wrapper>
    )
}