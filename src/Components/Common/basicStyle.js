import styled from 'styled-components';

const Flex = styled.div`
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection||'row'};
    justify-content:${({ justyfy }) => justyfy||'flex-start'};
    align-items:${({ alignItems }) => alignItems ||'flex-start'}
`
export {Flex}