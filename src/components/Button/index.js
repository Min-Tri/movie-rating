import React from "react";
import PropType from 'prop-types';

// styles
import { Wrapper } from "./Button.styles";

const Button=({text,callback})=>(
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
)

Button.proTypes={
    text: PropType.string,
    callback: PropType.func,
}

export default Button