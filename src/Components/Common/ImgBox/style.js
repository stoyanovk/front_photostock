import styled from "styled-components";

const ImgBoxWrapper = styled.div`
  width: ${({ width }) => width || "500px"};
  height: ${({ height }) => height || null};
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position:center;
  }
`;
export { ImgBoxWrapper };
