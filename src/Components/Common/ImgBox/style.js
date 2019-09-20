import styled from "styled-components";

const ImgBoxWrapper = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    height:${({height})=>height};
    object-position:50% 50%;
  }
`;
export { ImgBoxWrapper };
