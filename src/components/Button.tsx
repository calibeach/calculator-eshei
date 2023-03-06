import React from "react";
import { StyledButton, ButtonVariant } from "./styles/StyledButton";

interface ButtonProps 
    extends React.HTMLAttributes<HTMLButtonElement>{
    variant: ButtonVariant
}

const Button = ({children, variant="number", ...rest}: ButtonProps) => {
    return (
        <StyledButton variant={variant} {...rest}>
            {children}
        </StyledButton>
    );
}

export { Button }
export default Button