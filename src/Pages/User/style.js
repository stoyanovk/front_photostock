import styled from "styled-components";
const UserFirstWrapper = styled.div`
  padding: 30px 0;
  position: relative;
  z-index: 1;
`;
const UserFirstImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px);
  z-index: -1;
`;
const AvatarImageWrap = styled.div`
  max-width: 150px;
  width: 100%;
  height: 150%;
  margin: 20px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 568px) {
    max-width: 300px;
    height: 300px;
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
const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;
const GridImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export {
  MainTitle,
  SectionWrapper,
  Title,
  Text,
  UserFirstWrapper,
  AvatarImageWrap,
  UserFirstImg,
  GridImg
};
