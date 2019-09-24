import styled from "styled-components";

const PhotoContainerStyled = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: contain;
    max-height: 70vh;
  }
`;
const MainTitle = styled.h1`
  color: #fff;
  margin-bottom: 100px;
  display: block;
  font-size: 65px;
`;
const SectionWrapper = styled.div`
  padding: 50px 30px;
`;
const Title = styled.h2`
  font-size: 40px;
  color: #fff;
  margin-bottom: 30px;
  margin-top: 0;
`;
export { PhotoContainerStyled, MainTitle, SectionWrapper, Title };
