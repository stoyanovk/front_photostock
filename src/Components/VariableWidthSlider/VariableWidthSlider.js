import React from "react";
import Slider from "react-slick";

const VariableWidthSlider = ({ children }) => {
 

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default VariableWidthSlider;
