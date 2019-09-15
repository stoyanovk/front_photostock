import styled from "styled-components";

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100vh;
  background:rgba(0,0,0,0.8);
`;
const WrappedChild = styled.div`
  flex-grow: 1;
`;
export{
    WrapperStyle,
    WrappedChild
}