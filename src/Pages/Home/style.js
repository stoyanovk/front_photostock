import styled from "styled-components";
import { style } from "@material-ui/system";

const FirstSectionWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 30px;
  z-index: 1;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
const MainTitle = styled.h1`
  color: #fff;
  margin-bottom: 100px;
  display: block;
  font-size: 65px;
`;
const SecondSectionWrapper = styled.div`
  padding: 50px 30px;
`;
const Title = styled.h2`
  font-size: 40px;
  color: #fff;
  margin-bottom: 30px;
`;
const SliderItemStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  &:after {
    content: ${({ desc }) => `'${desc}'`};
    color: #fff;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;
export {
  FirstSectionWrapper,
  MainTitle,
  Title,
  SecondSectionWrapper,
  SliderItemStyle
};
