import { Wrapper } from "./style";

interface InputProps {
    autofocus?: boolean,
    name: string,
    placeholder: string
    value: [string, (param: string) => void]
}

export default function Input ({ autofocus, name, placeholder, value: valueProps }: InputProps) {

    const [value, setValue] = valueProps;

    return (
        <Wrapper>
            {name}
            <input 
                autoFocus={autofocus}
                type="text" 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={e => {setValue(e.target.value)}}
            />
        </Wrapper>
    )
}