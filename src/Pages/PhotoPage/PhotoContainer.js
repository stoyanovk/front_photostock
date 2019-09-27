import React from "react";
import { PhotoContainerStyled } from "./style";
import { url } from "../../utils";
export default function PhotoContainer({ image: { title, imageUrl } }) {
  return (
    <>
      <PhotoContainerStyled>
        <img src={`${url}${imageUrl}`} alt={title} />
      </PhotoContainerStyled>
    </>
  );
}
