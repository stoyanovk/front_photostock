import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ImgBox from "../../Components/Common/ImgBox";
import { usersApi } from "../../Api";
import { url } from "../../utils";
import { Link } from "react-router-dom";
export default function PhotoPageSlider({ userId }) {
  const [imageArr, setImageArr] = useState([]);
  useEffect(() => {
    userId &&
      usersApi.getOneUser(userId).then(({ data: { data } }) => {
        const {
          user: { images }
        } = data;
        setImageArr(images);
      });
  }, [userId]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const sliderItem = imageArr.map(({ _id, name, imageUrl }) => (
    <Link key={_id} to={`/photo/${_id}`}>
      <ImgBox desc={name} url={`${url}${imageUrl}`} height={"140px"} />
    </Link>
  ));
  return <Slider {...settings}>{sliderItem}</Slider>;
}
