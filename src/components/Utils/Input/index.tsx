import { useState } from "react";
import { Wrapper } from "./style";

interface InputProps {
    name: string,
    placeholder: string
    value: [string, (param: string) => void]
}

export default function Input ({ name, placeholder, value: valueProps }: InputProps) {

    const [value, setValue] = valueProps

    return (
        <Wrapper>
            {name}
            <input 
                type="text" 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={e => {setValue(e.target.value)}}
            />
        </Wrapper>
    )
}