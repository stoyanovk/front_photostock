import React from "react";
import { PhotoContainerStyled } from "./style";
export default function PhotoContainer({ image: { image_url, name } }) {

  return (
    <PhotoContainerStyled>
      <img src={image_url} alt={name}/>
    </PhotoContainerStyled>
  );
}
