import React from "react";
import ImgBox from "../../Components/Common/ImgBox";
import { SliderItemStyle} from "./style";
export default function SliderItem({
  image: {
    alt_description,
    urls: { raw }
  }
}) {
  return (
    <SliderItemStyle desc={alt_description}>
      <ImgBox decs={alt_description} url={raw}  />;
    </SliderItemStyle>
  );
}
