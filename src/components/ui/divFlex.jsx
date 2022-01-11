import styled from 'styled-components';
const StyledDiv = styled.div`
    display: flex;
    flex-direction:${props => props.direccion === 'row'? 'row': 'column'};
    justify-content: flex-start;
    align-items: center;
    background-color: mediumaquamarine;
    margin:10px;
`;

const DivFlex = ({children, direccion}) => {
    return <StyledDiv direccion = {direccion}>{children}</StyledDiv>
}

export default DivFlex;