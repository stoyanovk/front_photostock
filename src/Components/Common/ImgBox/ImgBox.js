import React from "react";
import { ImgBoxWrapper } from "./style";
export default function ImgBox({ desc, url, height }) {
  return (
    <ImgBoxWrapper height={height} >
      <img src={url} alt={desc} />
    </ImgBoxWrapper>
  );
}
