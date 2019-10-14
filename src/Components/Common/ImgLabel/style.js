import styled from "styled-components";
const StyledImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  height: 50px;
  display: block;
  outline: none;
  input {
    width: 0;
    height: 0;
  }
  &:before {
    content: "click there, for add image";
    position: absolute;
    background-color: #949494;
    width: 100%;
    height: 100%;
    top: -2px;
    left: -2px;
    border-radius: 10px;
    border: 1px dashed #2d2d2d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledLabel, StyledImg };
