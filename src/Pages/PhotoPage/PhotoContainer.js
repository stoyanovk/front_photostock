import React, { memo } from "react";
import { PhotoContainerStyled } from "./style";
import { url } from "../../utils";
function PhotoContainer({ image: { title, imageUrl } }, ...props) {
  // console.log(title, imageUrl);
  return (
    <PhotoContainerStyled>
      {props===undefined ? (
        <span>loading...</span>
      ) : (
        <img src={`${url}${imageUrl}`} alt={title} />
      )}
    </PhotoContainerStyled>
  );
}
export default memo(PhotoContainer);
