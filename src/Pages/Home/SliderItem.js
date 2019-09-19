import React from "react";
import ImgBox from "../../Components/Common/ImgBox";
import { SliderItemStyle } from "./style";

export default function SliderItem({ image: { image_url, description, name } }) {

  return (
    <SliderItemStyle desc={description}>
      <ImgBox decs={name} url={image_url} />;
    </SliderItemStyle>
  );
}
