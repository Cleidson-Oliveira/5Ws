import { Wrapper } from "./style";

interface InputProps {
    name: string,
    placeholder: string
}

export default function Input ({ name, placeholder }: InputProps) {
    return (
        <Wrapper>
            {name}
            <input type="text" name={name} placeholder={placeholder}/>
        </Wrapper>
    )
}