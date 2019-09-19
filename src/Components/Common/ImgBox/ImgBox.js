import React from "react";
import { ImgBoxWrapper } from "./style";
export default function ImgBox({ desc, id, url, height,width }) {
  return (
    <ImgBoxWrapper >
      <img src={url} alt={desc} />
    </ImgBoxWrapper>
  );
}
