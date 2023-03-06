import styled from "styled-components";

const StyledButtonGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 4px;
`

export default StyledButtonGrid;