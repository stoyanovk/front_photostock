import React from "react";
import { PhotoContainerStyled } from "./style";
export default function PhotoContainer({ image: { title, imageUrl } }) {
  const url = "https://photostock-back.herokuapp.com/storage/";
  return (
    <>
      <PhotoContainerStyled>
        <img src={`${url}${imageUrl}`} alt={title} />
      </PhotoContainerStyled>
      <a target='_blank' href={`${url}${imageUrl}`}>
        {" "}
        clicni menya
      </a>
    </>
  );
}
