import React, { useEffect, useState } from "react";
import { Title, SecondSectionWrapper } from "./style";
import VariableWidthSlider from "../../Components/VariableWidthSlider";
import { photosApi } from "../../Api";
import ImgBox from '../../Components/Common/ImgBox';
import SliderItem from './SliderItem';
export default function SecondSection() {
  const [popularImages, setPopularImage] = useState([]);
  useEffect(() => {
    // photosApi.getPhotos().then(({ data: { data } }) => {
    //   setPopularImage(data);
    // });
    fetch(
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
    )
      .then(res => res.json())
      .then(res => {
        setPopularImage(res);
      });
  }, []);
  // const sliderItem = popularImage.map(({ date, title, imageUrl, _id }) => {
  //   return (
  //     <ImgBox key={_id} decs={title} id={_id} url={`https://photostock-back.herokuapp.com/upload${imageUrl}`}/>
  //   );
  // });
  console.log(popularImages);
  const sliderItem = popularImages.map(image => {

    return (
      <SliderItem key={image.id} image={image} />
    );
  });
  return (
    <SecondSectionWrapper>
      <Title>Newest Images</Title>
      <VariableWidthSlider children={sliderItem} />
    </SecondSectionWrapper>
  );
}
