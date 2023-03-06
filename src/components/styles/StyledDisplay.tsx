import styled from "styled-components"

const StyledDisplay = styled.p`
    text-align: right;
    background: ${({theme}) => theme.input.background};
    color: ${({theme}) => theme.input.color};
    margin-bottom: 10px;
    line-height: 52px;
    font-size: 48px;
    font-weight: 300;
`

export default StyledDisplay