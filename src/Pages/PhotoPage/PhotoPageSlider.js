import React from "react";
import Slider from "react-slick";
import ImgBox from "../../Components/Common/ImgBox"
export default function PhotoPageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    };
    const sliderItem = images.map((image) => <ImgBox key={image.id} desc={image.name} url={image.image_url} height={'220px'}/>)
    return <Slider {...settings}>{sliderItem}</Slider>;
}
