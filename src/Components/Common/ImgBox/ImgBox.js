import React from "react";
import { ImgBoxWrapper } from "./style";
export default function ImgBox({ desc, id, url, height,width }) {
  return (
    <ImgBoxWrapper height={height} width={width}>
      <img src={url} alt={desc} />
    </ImgBoxWrapper>
  );
}
