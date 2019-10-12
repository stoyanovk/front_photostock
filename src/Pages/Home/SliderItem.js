import React from "react";
import ImgBox from "../../Components/Common/ImgBox";
import { SliderItemStyle } from "./style";

export default function SliderItem({ image, handleClick, title }) {
  return (
    <SliderItemStyle desc={title} onClick={handleClick}>
      <ImgBox decs={title} url={image} height={"450px"} />
    </SliderItemStyle>
  );
}
