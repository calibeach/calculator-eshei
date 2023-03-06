import styled from "styled-components"

type ButtonVariant = "miscellaneous" | "number" | "operator"

const StyledButton = styled.button.attrs({type: "button"})
<{variant: ButtonVariant}>`
    background: ${({theme, variant}) => theme.button.background[variant]};
    color: ${({theme, variant}) => theme.button.color[variant]};
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;

    &.zeroButton {
        grid-column: span 2;
        border-radius: 40%;
        width: 100px;
    }

    &:active {
      background-color: ${({theme}) => theme.active};
    }
`

export { StyledButton }
export type { ButtonVariant }