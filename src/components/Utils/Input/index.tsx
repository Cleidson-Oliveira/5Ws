import { useState } from "react";
import { Wrapper } from "./style";

interface InputProps {
    name: string,
    placeholder: string
}

export default function Input ({ name, placeholder }: InputProps) {

    const [value, setValue] = useState('')

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