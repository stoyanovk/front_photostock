import styled from "styled-components";

const FirstSectionWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 30px;
  z-index:1;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index:-1;
  }
`;
const MainTitle = styled.h1`
    color:#fff;
    margin-bottom:100px;
    display:block;
    font-size:65px;
`
export { FirstSectionWrapper,MainTitle };
