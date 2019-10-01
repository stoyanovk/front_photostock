import styled from "styled-components";
const CategoryFirstWrapper = styled.div`
  height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 30px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
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
const GridImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export { CategoryFirstWrapper, MainTitle, SectionWrapper, Title, GridImg };
