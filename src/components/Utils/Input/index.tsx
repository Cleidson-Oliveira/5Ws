import { Wrapper } from "./style";

interface InputProps {
    autofocus?: boolean,
    name: string,
    placeholder: string
    value: [string, (param: string) => void]
}

interface UncrontroledInputProps {
    inputId: string,
    name: string,
    placeholder: string
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

export function UncrontroledInput ({ inputId, name, placeholder }: UncrontroledInputProps) {

    return (
        <Wrapper>
            {name}
            <input
                id={inputId}
                type="text" 
                name={name} 
                placeholder={placeholder}
            />
        </Wrapper>
    )
}

